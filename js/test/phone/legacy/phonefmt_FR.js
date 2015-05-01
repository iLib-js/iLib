/*
 * phonefmt_FR.js - Test the phonefmt_FR Style.
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
 
function testFormatFRStyle0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "01 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatFRStyle1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "(0)1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatFRInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	});
	var expected = "+353 86 822 3689";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatFRInternationalAccessCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatFRMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "6",
			subscriberNumber: "12345678"
	});
	var expected = "06 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatFRFreephone(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "800",
			subscriberNumber: "345678"
	});
	var expected = "0800 345 678";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatFRToll(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "810",
			subscriberNumber: "345678"
	});
	var expected = "0810 345 678";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatFRDepartment(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "590",
			subscriberNumber: "123456"
	});
	var expected = "0590 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatFRInternationalDepartment(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			serviceCode: "590",
			subscriberNumber: "123456"
	});
	var expected = "+33 590 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};







function testFormatWithParamsStyle0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "01 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "(0)1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	});
	var expected = "+353 86 822 3689";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsInternationalAccessCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "6",
			subscriberNumber: "12345678"
	});
	var expected = "06 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsDepartment(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "590",
			subscriberNumber: "123456"
	});
	var expected = "0590 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsInternationalDepartment(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			serviceCode: "590",
			subscriberNumber: "123456"
	});
	var expected = "+33 590 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsSMSPartial(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "12345"
	});
	var expected = "12 34 5";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsSMSWhole(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "12345"
	});
	var expected = "12345";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle0Partial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4"
	});
	var expected = "04 ";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "1"
	});
	var expected = "04 1";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "12"
	});
	var expected = "04 12";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "123"
	});
	var expected = "04 12 3";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "1234"
	});
	var expected = "04 12 34";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "12345"
	});
	var expected = "04 12 34 5";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "123456"
	});
	var expected = "04 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "1234567"
	});
	var expected = "04 12 34 56 7";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "12345678"
	});
	var expected = "04 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "04123456789"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsStyle1Partial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4"
	});
	var expected = "(0)4 ";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "1"
	});
	var expected = "(0)4 1";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "12"
	});
	var expected = "(0)4 12";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "123"
	});
	var expected = "(0)4 12 3";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "1234"
	});
	var expected = "(0)4 12 34";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "12345"
	});
	var expected = "(0)4 12 34 5";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "123456"
	});
	var expected = "(0)4 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "1234567"
	});
	var expected = "(0)4 12 34 56 7";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "12345678"
	});
	var expected = "(0)4 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle1Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "04123456789"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR", style: "parenthèses"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


function testFormatWithParamsStyle0PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "45 6";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "45 63";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45 63 4";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "45 63 45";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "45 63 45 3";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "45 63 45 35";
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatWithParamsStyle0PartialLocal9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345353" // too long
	});
	var expected = "456345353"; 		  // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "fr-FR"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


// for NOV-113777
function testFormatLocalNumberPartial(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "41551735"
	});
	var expected = "41 55 17 35";
	
	var fmt = new ilib.PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatLocalNumberWhole(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "41551735"
	});
	var expected = "41 55 17 35";
	
	var fmt = new ilib.PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
