/*
 * phonefmt_US.js - Test the phonefmt_US Style.
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

var ilib = require("./../lib/ilib.js");
var PhoneNumber = require("./../lib/PhoneNumber.js");
var PhoneFmt = require("./../lib/PhoneFmt.js");
function testFormatUSNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	// default to US format
	var fmt = new PhoneFmt({style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle0() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle1() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "456-345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSFull0() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "415",
		subscriberNumber: "4154155"
	});
	var expected = "(415) 415-4155";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSInternational() { 
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};


function testFormatUSInternational2() { 
	var formatted;
	var parsed = new PhoneNumber("+82317105678", {locale:"en-US"});
	var expected = "+82 31 710 5678";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};


function testFormatUSInternationalLongArea() { 
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSInternationalAccessCode() { 
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "011",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	var expected = "011 33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSInternationalAccessCode2() { 
	var formatted;
	var parsed = new PhoneNumber("011821045670923", {locale:"en-US"});
			
	var expected = "011 82 10 4567 0923";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSPlusIDDtoUnknownCountry() { 
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",	// costa rica
		subscriberNumber: "87654321"
	});
	var expected = "+506 87654321";	// use last resort rule for subscriber number
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle0DialAround() { 
	var formatted;
	var parsed = new PhoneNumber({
		cic: "1010321",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "10-10-321 (456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle1DialAround() { 
	var formatted;
	var parsed = new PhoneNumber({
		cic: "1010321",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "10-10-321-456-345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle0Vertical() { 
	var formatted;
	var parsed = new PhoneNumber({
		vsc: "*55",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "*55 (456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle0OldVertical() { 
	var formatted;
	var parsed = new PhoneNumber({
		vsc: "115",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "115 (456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalWithPauseChars() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "617-5568 w1234";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLDWithPauseChars() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "(415) 617-5568 w1234";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalWithExtension() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "617-5568 1234";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLDWithExtension() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "(415) 617-5568 1234";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLDWithTrunkAndExtension() { 
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "1 (415) 617-5568 1234";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle0Emergency() { 
	var formatted;
	var parsed = new PhoneNumber({
		emergency: "911"
	});
	var expected = "911 ";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSEmergencyLikeServiceNumber() { 
	var formatted;
	var parsed = new PhoneNumber({
		emergency: "411"
	});
	var expected = "411 ";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSStyle0EmergencyExtended() { 
	var formatted;
	var parsed = new PhoneNumber({
		emergency: "911",
		subscriberNumber: "123"
	});
	var expected = "911 123";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithUSMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithUSMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithUSMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithUSMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};


function testFormatUSNumberWithFRMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithFRMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithFRMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithFRMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithDEMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithDEMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new PhoneFmt({style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithFRMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithFRMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithMXMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithMXMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithMXMCC() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSLocalNumberWithMXMCCNoLocale() { 
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

//for NOV-108200
function testFormatUSWithBogusSpecialChars() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "P1",
		areaCode: "381",
		subscriberNumber: "7803573"
	});
	var expected = "+P1 381 780 3573";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	// default to US format
	var fmt = new PhoneFmt({style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "456-345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSFull0() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "415",
		subscriberNumber: "4154155"
	});
	var expected = "(415) 415-4155";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatPartialSMS() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "34534"
	});
	var expected = "345-34";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatWholeSMS() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "34534"
	});
	var expected = "34534";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSInternational() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSInternationalLongArea() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSInternationalAccessCode() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "011",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	var expected = "011 33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPlusIDDtoUnknownCountry() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",	// costa rica
		subscriberNumber: "87654321"
	});
	var expected = "+506 87654321";	// use last resort rule for subscriber number
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0DialAround() {
	var formatted;
	var parsed = new PhoneNumber({
		cic: "1010321",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "10-10-321 (456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1DialAround() {
	var formatted;
	var parsed = new PhoneNumber({
		cic: "1010321",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "10-10-321-456-345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Vertical() {
	var formatted;
	var parsed = new PhoneNumber({
		vsc: "*55",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "*55 (456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0OldVertical() {
	var formatted;
	var parsed = new PhoneNumber({
		vsc: "115",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "115 (456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalWithPauseChars() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "617-5568 w1234";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLDWithPauseChars() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "(415) 617-5568 w1234";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalWithExtension() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "617-5568 1234";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLDWithExtension() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "(415) 617-5568 1234";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLDWithTrunkAndExtension() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "1 (415) 617-5568 1234";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Emergency() {
	var formatted;
	var parsed = new PhoneNumber({
			emergency: "911"
	});
	var expected = "911 ";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0EmergencyExtended() {
	var formatted;
	var parsed = new PhoneNumber({
		emergency: "911",
		subscriberNumber: "123"
	});
	var expected = "911 123";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "4"
	});
	var expected = "(4)";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "45"
	});
	var expected = "(45)";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456"
	});
	var expected = "(456) ";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3"
	});
	var expected = "(456) 3";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34"
	});
	var expected = "(456) 34";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "345"
	});
	var expected = "(456) 345";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453"
	});
	var expected = "(456) 345-3";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534"
	});
	var expected = "(456) 345-34";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial9() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "345343"
	});
	var expected = "(456) 345-343";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial10() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0Partial11() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534345" // too long
	});
	var expected = "45634534345"; // use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "45634535"  // too long
	});
	var expected = "45634535";  // use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk1() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1"
	});
	var expected = "1";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk1() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "4"
	});
	var expected = "1 (4)";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk2() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "45"
	});
	var expected = "1 (45)";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk3() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456"
	});
	var expected = "1 (456) ";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk4() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3"
	});
	var expected = "1 (456) 3";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk5() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34"
	});
	var expected = "1 (456) 34";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk6() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345"
	});
	var expected = "1 (456) 345";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk7() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453"
	});
	var expected = "1 (456) 345-3";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk8() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534"
	});
	var expected = "1 (456) 345-34";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk9() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345343"
	});
	var expected = "1 (456) 345-343";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk10() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "1 (456) 345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle0PartialTrunk11() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534345" // too long
	});
	var expected = "145634534345";	// use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial1() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial2() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial3() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456"
	});
	var expected = "456-";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial4() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3"
	});
	var expected = "456-3";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial5() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34"
	});
	var expected = "456-34";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial6() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "345"
	});
	var expected = "456-345";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial7() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453"
	});
	var expected = "456-345-3";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial8() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534"
	});
	var expected = "456-345-34";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial9() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "345343"
	});
	var expected = "456-345-343";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial10() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "456-345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1Partial11() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534345"
	});
	var expected = "45634534345";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "45634534" // too long
	});
	var expected = "45634534";  // use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk1() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1"
	});
	var expected = "1-";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk1() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "4"
	});
	var expected = "1-4";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk2() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "45"
	});
	var expected = "1-45";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk3() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456"
	});
	var expected = "1-456-";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk4() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3"
	});
	var expected = "1-456-3";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk5() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34"
	});
	var expected = "1-456-34";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk6() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345"
	});
	var expected = "1-456-345";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk7() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453"
	});
	var expected = "1-456-345-3";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk8() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534"
	});
	var expected = "1-456-345-34";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk9() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345343"
	});
	var expected = "1-456-345-343";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk10() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	var expected = "1-456-345-3434";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSStyle1PartialTrunk11() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534343" // too long
	});
	var expected = "145634534343";  // use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry0() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+"
	});
	var expected = "+";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry1() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "3"
	});
	var expected = "+3";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry2() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "39"
	});
	var expected = "+39 ";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry3() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0"
	});
	var expected = "+39 0";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry4() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		subscriberNumber: "4"
	});
	var expected = "+39 04";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry5() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40"
	});
	var expected = "+39 040 ";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry6() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "1"
	});
	var expected = "+39 040 1";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatUSPartialIDDToPreserveZeroCountry7() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "12345678"
	});
	var expected = "+39 040 12345678";
	
	var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatNumberWithUSMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new PhoneFmt({locale: "en-US", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatNumberWithUSMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithUSMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({locale: "en-US", mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithUSMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({mcc: "316"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatNumberWithFRMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new PhoneFmt({locale: "en-US", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatNumberWithFRMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithFRMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new PhoneFmt({locale: "en-US", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithFRMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatNumberWithDEMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new PhoneFmt({locale: "en-US", mcc: "262"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatNumberWithDEMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new PhoneFmt({mcc: "262"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithFRMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new PhoneFmt({locale: "en-US", mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithFRMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatUSNumberWithMXMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new PhoneFmt({locale: "es-MX", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatNumberWithMXMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new PhoneFmt({mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithMXMCC() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({locale: "es-MX", mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatLocalNumberWithMXMCCNoLocale() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new PhoneFmt({mcc: "334"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

//for NOV-108200
function testWithParamsFormatWithBogusSpecialChars() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "P1",
		areaCode: "381",
		subscriberNumber: "7803573"
	});
	var expected = "+P1 381 780 3573";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatWith555Number() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "408",
		subscriberNumber: "5551234"
	});
	var expected = "(408) 555-1234";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatFictitiousNumberLocal() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "5555555"
	});
	var expected = "555-5555";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatFictitiousNumberLD() {
	var formatted;
	var parsed = new PhoneNumber({
		areaCode: "555",
		subscriberNumber: "5555555"
	});
	var expected = "(555) 555-5555";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testWithParamsFormatSMSThatLooksFictitious() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "5555"
	});
	var expected = "5555";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

//for NOV-113367
function testCrazyIntl() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		trunkAccess: "1",
		subscriberNumber: "23"
	});
	var expected = "+1 123";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

//for NOV-109333
function testOddVSC() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "*#43#"
	});
	var expected = "*#43#";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testSSCode() {
	var formatted;
	var parsed = new PhoneNumber({
		vsc: "*64",
		subscriberNumber: "6#"
	});
	var expected = "*64 6#";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

// for CFISH-5088
function testVSCUMTS1(){
	var formatted;
	var parsed = new PhoneNumber("#*06", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = "#*06 ";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testVSCUMTS2(){
	var formatted;
	var parsed = new PhoneNumber("*#06#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = "*#06#4089876543";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testVSCUMTS3(){
	var formatted;
	var parsed = new PhoneNumber("*#062#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = "*#062#4089876543";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testVSCUMTS4(){
	var formatted;
	var parsed = new PhoneNumber("#62#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = "#62#4089876543";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testVSCUMTS5(){
	var formatted;
	var parsed = new PhoneNumber("*##62#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = "*##62#4089876543";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testVSCUMTS6(){
	var formatted;
	var parsed = new PhoneNumber("##62#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = "##62#4089876543";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testVSCUMTS7(){
	var formatted;
	var parsed = new PhoneNumber("*911", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = "*911 ";
	
	var fmt = new PhoneFmt({locale: "en-US"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testVSCUMTS8(){
	var formatted;
	var parsed = new PhoneNumber("*844752224458", {mcc: "310"}); // US
	assertNotUndefined(parsed);
	
	var expected = "*844752224458";
	
	var fmt = new PhoneFmt({isPartial: true, mcc: "310"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

// for CFISH-6362
function testVSCCDMALong(){
	var formatted;
	var parsed = new PhoneNumber("1112345", {mcc: "310"}); // US
	assertNotUndefined(parsed);
	
	var expected = "1112345";
	
	var fmt = new PhoneFmt({mcc: "310"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testGetAvailableStyles() {
	var fmtStyle = new PhoneFmt({locale: "en-US"});
	var styles = fmtStyle.getAvailableStyles();
	assertNotUndefined(styles);

	assertEquals("default", styles[0]);
	assertEquals("dashes", styles[1]);
	assertEquals("dots", styles[2]);
};

function testGetStyleExample() {
	var fmtStyle = new PhoneFmt({locale: "en-US"});
	var exampleDefault = fmtStyle.getStyleExample("default");
	var exampleDashes = fmtStyle.getStyleExample("dashes");
	var exampleDots = fmtStyle.getStyleExample("dots");
	
	assertEquals("1 (650) 555-1234", exampleDefault);
	assertEquals("1-650-555-1234", exampleDashes);
	assertEquals("1.650.555.1234", exampleDots);
};

function mockLoader(paths, sync, params, callback) {
	var data = [];
	
	data.push(ilib.data.phonefmt);
	data.push(ilib.data.phonefmt_US);
	
	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	return data;
}

function testPhoneFmtUSLoadLocaleDataSynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
	PhoneFmt.cache = {};
	ilib.setLoaderCallback(mockLoader);

	var phonefmt = new PhoneFmt({
		locale: "en-US",
		sync: false,
		onLoad: function (fmt) {
    		assertNotNull(fmt);
    	}
	});

	assertEquals("1 (650) 555-1234", phonefmt.getStyleExample("default"));
};