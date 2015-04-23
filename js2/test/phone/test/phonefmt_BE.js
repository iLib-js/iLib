/*
 * phonefmt_BE.js - Test the phonefmt_BE Style.
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
 function testFormatBEStyle0() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059 12 34 56";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEStyle1() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059 123456";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059-12-34-56";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle3() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059/12 34 56";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "japen/barres obliques"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEInternational() {
	var formatted,
		parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "32",
			areaCode: "2",
			subscriberNumber: "1234567"
		}),
		expected = "+32 2 123 45 67";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEInternationalAccessCode() {
	var formatted,
		parsed = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "32",
			areaCode: "2",
			subscriberNumber: "1234567"
		}),
		expected = "00 32 2 123 45 67";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBELongAreaCode() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "601",
			subscriberNumber: "123456"
		}),
		expected = "0601 12 34 56";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatBEMobile() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "491",
			subscriberNumber: "234567"
		}),
		expected = "0491 23 45 67";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEMobileInternational() {
	var formatted,
		parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "32",
			trunkAccess: "0",
			mobilePrefix: "491",
			subscriberNumber: "234567"
		}),
		expected = "+32 491 23 45 67";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatBEWithParamsSMSPartial() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "87 65";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEWithParamsSMSWhole() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "8765";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEPremium() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			serviceCode: "906",
			subscriberNumber: "12345"
		}),
		expected = "0906 12 34 5";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEBlock() {
	var formatted,
		parsed = new PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
		}),
		expected = "116 116";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};



function testFormatBEStyle0Partial0() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial1() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial2() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060 ";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial3() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060 1";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial4() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060 12";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial5() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060 12 3";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial6() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060 12 34";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial7() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060 12 34 5";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial8() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060 12 34 56";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial9() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060 123 45 67";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0Partial10() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEStyle0PartialLocal1() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0PartialLocal2() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0PartialLocal3() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "45 6";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0PartialLocal4() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "45 63";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0PartialLocal5() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45 63 4";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0PartialLocal6() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "45 63 45";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0PartialLocal7() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "456 34 53";
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle0PartialLocal8() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45634535"
		}),
		expected = "45634535"; // too long
	
	var fmt = new PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEStyle1Partial0() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial1() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial2() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060 ";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial3() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060 1";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial4() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060 12";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial5() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060 123";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial6() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060 1234";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial7() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060 12345";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial8() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060 123456";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial9() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060 1234567";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1Partial10() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEStyle1PartialLocal1() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1PartialLocal2() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1PartialLocal3() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "456";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1PartialLocal4() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "4563";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1PartialLocal5() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45634";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1PartialLocal6() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "456345";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1PartialLocal7() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "4563453";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle1PartialLocal8() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45634534" // too long
		}),
		expected = "45634534";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEStyle2Partial0() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial1() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial2() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060-";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial3() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060-1";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial4() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060-12";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial5() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060-12-3";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial6() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060-12-34";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial7() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060-12-34-5";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial8() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060-12-34-56";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial9() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060-123-45-67";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2Partial10() {
	var formatted,
		parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatBEStyle2PartialLocal1() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2PartialLocal2() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2PartialLocal3() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "45-6";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2PartialLocal4() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "45-63";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2PartialLocal5() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45-63-4";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2PartialLocal6() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "45-63-45";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2PartialLocal7() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "456-34-53";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBEStyle2PartialLocal8() {
	var formatted,
		parsed = new PhoneNumber({
			subscriberNumber: "45634534" // too long
		}),
		expected = "45634534";
	
	var fmt = new PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
