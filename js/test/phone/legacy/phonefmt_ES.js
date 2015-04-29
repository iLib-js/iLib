/*
 * phonefmt_ES.js - Test the phonefmt_ES Style.
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
 
function testFormatESStyle0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "957 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "957 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "95 712 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "viejo"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "957 123456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "compacto"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatESInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "34",
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "+34 957 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			mobilePrefix: "616",
			subscriberNumber: "846357"
	});
	var expected = "616 846 357";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatESInternationalAccessCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "34",
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "00 34 957 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatESDialAround(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			cic: "1032",
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "1032 957 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatESStyle0Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "9"
	});
	var expected = "9";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "91"
	});
	var expected = "91 ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912"
	});
	var expected = "912 ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1"
	});
	var expected = "912 1";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12"
	});
	var expected = "912 12";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123"
	});
	var expected = "912 123";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234"
	});
	var expected = "912 123 4";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12345"
	});
	var expected = "912 123 45";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123456"
	});
	var expected = "912 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle0Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234567"	// too long
	});
	var expected = "9121234567"; 	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatESStyle1Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "9"
	});
	var expected = "9";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "91"
	});
	var expected = "91 ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912"
	});
	var expected = "912 ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1"
	});
	var expected = "912 1";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12"
	});
	var expected = "912 12";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123"
	});
	var expected = "912 12 3";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234"
	});
	var expected = "912 12 34";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12345"
	});
	var expected = "912 12 34 5";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123456"
	});
	var expected = "912 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatESStyle1Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234567"	// too long
	});
	var expected = "9121234567"; 	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES", style: "dobles"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "34",
			areaCode: "912",
			subscriberNumber: "123456"
	});
	var expected = "+34 912 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalPartial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00"
	});
	var expected = "00 ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1"
	});
	var expected = "00 1 ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "6"
	});
	var expected = "00 1 6";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "65"
	});
	var expected = "00 1 65";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650"
	});
	var expected = "00 1 650 ";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5"
	});
	var expected = "00 1 650 5";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55"
	});
	var expected = "00 1 650 55";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555"
	});
	var expected = "00 1 650 555";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551"
	});
	var expected = "00 1 650 555 1";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55512"
	});
	var expected = "00 1 650 555 12";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555123"
	});
	var expected = "00 1 650 555 123";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatInternationalPartial12(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551234"
	});
	var expected = "00 1 650 555 1234";
	
	var fmt = new ilib.PhoneFmt({locale: "es-ES"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
