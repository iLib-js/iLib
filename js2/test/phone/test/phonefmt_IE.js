/*
 * phonefmt_IE.js - Test the phonefmt_IE Style.
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
 
function testFormatIEStyle0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "(01) 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEStyle1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "01 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEInternationalAccessCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIELongAreaCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12345"
	});
	var expected = "(0404) 12345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "85",
			subscriberNumber: "1234567"
	});
	var expected = "085 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	});
	var expected = "+353 86 822 3689";

	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
};

function testFormatIEService(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			serviceCode: "1569",
			subscriberNumber: "1234567"
	});
	var expected = "1569 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEIDD(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEPersonal(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "700",
			subscriberNumber: "1234567"
	});
	var expected = "0700 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEStyle0Partial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "4"
	});
	var expected = "04";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "40"
	});
	var expected = "040";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404"
	});
	var expected = "(0404) ";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1"
	});
	var expected = "(0404) 1";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12"
	});
	var expected = "(0404) 12";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "123"
	});
	var expected = "(0404) 123";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1234"
	});
	var expected = "(0404) 1234";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12345"
	});
	var expected = "(0404) 12345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "123456"
	});
	var expected = "(0404) 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1234567"
	});
	var expected = "(0404) 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12345678"
	});
	var expected = "(0404) 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0Partial12(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "123456789" // too long
	});
	var expected = "0404123456789";	// last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatIEStyle1Partial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "4"
	});
	var expected = "04 ";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "40"
	});
	var expected = "040 ";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404"
	});
	var expected = "0404 ";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1"
	});
	var expected = "0404 1";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12"
	});
	var expected = "0404 12";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "123"
	});
	var expected = "0404 123";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1234"
	});
	var expected = "0404 1234";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12345"
	});
	var expected = "0404 12345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "123456"
	});
	var expected = "0404 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1234567"
	});
	var expected = "0404 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12345678"
	});
	var expected = "0404 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "123456789"
	});
	var expected = "0404123456789";	// last resort rule because subscriberNumber is too long
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEStyle0PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456 345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle0PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563 4535";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEStyle1PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456 345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "4563 4534";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatIEStyle1PartialLocal9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345345"
	});
	var expected = "456345345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

// for CFISH-5426
function testFormatIEEmergency(){
	var formatted;
	var parsed = new ilib.PhoneNumber("999", {locale: 'en_ie'});
	var expected = "999";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};