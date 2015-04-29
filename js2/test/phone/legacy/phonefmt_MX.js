/*
 * phonefmt_MX.js - Test the phonefmt_MX Style.
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
 
function testFormatMXStyle0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatMXStyle1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "(33) 1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatMXStyle2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "espacios"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatMXStyle3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33/1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "barras"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
 
function testFormatMXInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMXInternationalAccessCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMXInternationalDialToCell(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "52",
			mobilePrefix: "044",
			areaCode: "55",
			subscriberNumber: "12345678"
	});
	var expected = "+52 1 55 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMXService(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			serviceCode: "800",
			subscriberNumber: "12345678"
	});
	var expected = "01-800-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSMSPartial(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "12345"
	});
	var expected = "123-45";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSMSWhole(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "12345"
	});
	var expected = "12345";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNumberWithUSMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNumberWithUSMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithMXMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithMXMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatNumberWithFRMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNumberWithFRMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithFRMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithFRMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatNumberWithDEMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNumberWithDEMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithFRMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithFRMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNumberWithMXMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNumberWithMXMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithMXMCC(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLocalNumberWithMXMCCNoLocale(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new ilib.PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};





function testFormatWithParamsStyle0Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "3"
	});
	var expected = "3";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "33"
	});
	var expected = "33";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "331"
	});
	var expected = "331";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "3312"
	});
	var expected = "331-2";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "33123"
	});
	var expected = "331-23";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "331234"
	});
	var expected = "331-234";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "3312345"
	});
	var expected = "331-2345";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "33123456"
	});
	var expected = "3312-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "1234567"
	});
	var expected = "33-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "123456789" // too long
	});
	var expected = "33123456789"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle0PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563-4535";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345356"  // too long
	});
	var expected = "456345356";  // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle0PartialTrunk0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01"
	});
	var expected = "01";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "5"
	});
	var expected = "01-5-";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55"
	});
	var expected = "01-55-";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1"
	});
	var expected = "01-55-1";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12"
	});
	var expected = "01-55-12";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123"
	});
	var expected = "01-55-123";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234"
	});
	var expected = "01-55-123-4";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345"
	});
	var expected = "01-55-123-45";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456"
	});
	var expected = "01-55-123-456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234567"
	});
	var expected = "01-55-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345678"
	});
	var expected = "01-55-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialTrunk11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456789" // too long 
	});
	var expected = "0155123456789";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle1Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "3"
	});
	var expected = "3";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "33"
	});
	var expected = "33";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "331"
	});
	var expected = "331";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "3312"
	});
	var expected = "331-2";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "33123"
	});
	var expected = "331-23";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "331234"
	});
	var expected = "331-234";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "3312345"
	});
	var expected = "331-2345";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "33123456"
	});
	var expected = "3312-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "1234567"
	});
	var expected = "(33) 123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "(33) 1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "123456789" // too long
	});
	var expected = "33123456789"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle1PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563-4535";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345356"  // too long
	});
	var expected = "456345356";  // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle1PartialTrunk0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01"
	});
	var expected = "01";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "5"
	});
	var expected = "01 (5) ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55"
	});
	var expected = "01 (55) ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1"
	});
	var expected = "01 (55) 1";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12"
	});
	var expected = "01 (55) 12";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123"
	});
	var expected = "01 (55) 123";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234"
	});
	var expected = "01 (55) 123-4";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345"
	});
	var expected = "01 (55) 123-45";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456"
	});
	var expected = "01 (55) 123-456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234567"
	});
	var expected = "01 (55) 123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345678"
	});
	var expected = "01 (55) 1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1PartialTrunk11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456789" // too long 
	});
	var expected = "0155123456789";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

//for bug NOV-119557
function testFormatTollFree(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "01",
		serviceCode: "800",
		subscriberNumber: "0220606" 
	});
	var expected = "01-800-022-0606";
	
	var fmt = new ilib.PhoneFmt({locale: "es-MX"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
	
	
};
