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
 
var PhoneNumber = require("./../lib/PhoneNumber.js");
var PhoneFmt = require("./../lib/PhoneFmt.js");
function testFormatStyle0(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "(0255) 123 456";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255 12 34 56";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255 123456";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle3(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255-123-456";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "streepjes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle4(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255/12 34 56";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "japen"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternational(){
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "31",
			areaCode: "20",
			subscriberNumber: "1234567"
	});
	var expected = "+31 20 123 4567";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalAccessCode(){
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "31",
			areaCode: "20",
			subscriberNumber: "1234567"
	});
	var expected = "00 31 20 123 4567";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLongAreaCode(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "388",
			subscriberNumber: "123456"
	});
	var expected = "(0388) 123 456";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatMobile(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "6",
			subscriberNumber: "12345678"
	});
	var expected = "06 1234 5678";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobileInternational(){
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "31",
			trunkAccess: "0",
			mobilePrefix: "6",
			subscriberNumber: "12345678"
	});
	var expected = "+31 6 1234 5678";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsSMSPartial(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "876 5";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsSMSWhole(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatPremium(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			serviceCode: "906",
			subscriberNumber: "12345678"
	});
	var expected = "0906 1234 5678";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBlock(){
	var formatted;
	var parsed = new PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
	});
	var expected = "116 116";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternetDialUp(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			serviceCode: "85",
			subscriberNumber: "7654321"
	});
	var expected = "085 765 4321";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};








function testFormatStyle0Partial0(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial1(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial2(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "(030) ";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial3(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "(030) 1";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial4(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "(030) 12";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial5(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "(030) 123";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial6(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "(030) 123 4";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial7(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "(030) 123 45";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial8(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "(030) 123 456";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial9(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "(030) 123 4567";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial10(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678"
	});
	var expected = "(030) 1234 5678";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial11(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "030123456789";	// last resort rule
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle0PartialLocal1(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal2(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal3(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal4(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456 3";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal5(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456 34";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal6(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456 345";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal7(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal8(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563 4535";
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal9(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


function testFormatStyle1Partial0(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial1(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial2(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "030 ";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial3(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "030 1";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial4(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "030 12";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial5(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "030 12 3";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial6(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "030 12 34";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial7(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "030 12 34 5";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial8(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "030 12 34 56";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial9(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "030 123 45 67";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial10(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678" // too long
	});
	var expected = "03012345678";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1PartialLocal1(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal2(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal3(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "45 6";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal4(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "45 63";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal5(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45 63 4";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal6(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "45 63 45";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal7(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 34 53";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal8(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634534" // too long
	});
	var expected = "45634534";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


function testFormatStyle2Partial0(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial1(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial2(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "030 ";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial3(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "030 1";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial4(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "030 12";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial5(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "030 123";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial6(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "030 1234";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial7(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "030 12345";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial8(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "030 123456";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial9(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "030 1234567";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial10(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678"
	});
	var expected = "030 12345678";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial11(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "030123456789";	// last resort rule
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle2PartialLocal1(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal2(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal3(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal4(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal5(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal6(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal7(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "4563453";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal8(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "45634534";
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal9(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
