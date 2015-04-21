/*
 * phonefmt_DE.js - Test the phonefmt_DE Style.
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
 
var PhoneNumber = require("./../lib/PhoneNumber.js");
var PhoneFmt = require("./../lib/PhoneFmt.js");
function testFormatDEStyle0(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224 123 45 67";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDEStyle1(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224/1 23 45 67";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle2(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "(06224) 123 4567";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle3(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224 1234567";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "minimalistischen"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle4(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224 123 4567";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alternitive"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDEInternational(){
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDEInternationalAccessCode(){
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDEMobile(){
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	});
	var expected = "+353 86 822 3689";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDELongAreaCode(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "38852",
			subscriberNumber: "123456"
	});
	var expected = "038852 12 34 56";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatDEMobile(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "165",
			subscriberNumber: "12345678"
	});
	var expected = "0165 1234 5678";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEDialAround(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			cic: "1032",
			areaCode: "2360",
			subscriberNumber: "123456"
	});
	var expected = "01032 2360 12 34 56";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEDialAroundLong(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			cic: "10032",
			areaCode: "2360",
			subscriberNumber: "1234567"
	});
	var expected = "010032 2360 123 45 67";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEpremium(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			serviceCode: "1169",
			subscriberNumber: "12345678"
	});
	var expected = "01169 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEBlock(){
	var formatted;
	var parsed = new PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
	});
	var expected = "116 116";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEInternetDialUp(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			serviceCode: "1925",
			subscriberNumber: "87654321"
	});
	var expected = "01925 87 65 43 21";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDEStyle0Partial0(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial1(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial2(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "(030) ";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial3(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "(030) 1";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial4(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "(030) 12";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial5(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "(030) 123";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial6(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "(030) 1234";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial7(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "(030) 12345";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial8(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "(030) 123 456";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial9(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "(030) 123 4567";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial10(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678"
	});
	var expected = "(030) 1234 5678";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0Partial11(){
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "030123456789";	// last resort rule
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDEStyle0PartialLocal1(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal2(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal3(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal4(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal5(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal6(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "45 63 45";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal7(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 34 53";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal8(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "45 63 45 35";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle0PartialLocal9(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatDEStyle1PartialLocal1(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal2(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal3(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "4 56";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal4(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "45 63";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal5(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "4 56 34";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal6(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "45 63 45";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal7(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "4 56 34 53";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal8(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "45 63 45 34";
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatDEStyle1PartialLocal9(){
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
