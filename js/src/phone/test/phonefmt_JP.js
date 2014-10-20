/*
 * phonefmt_JP.js - Test the phonefmt_JP Style.
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
 
function testFormatStyle0() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0358412047", {locale:"ja-JP"});
	var expected = "03-5841-2047";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0668795111", {locale: "ja-JP"});
	var expected = "06-6879-5111";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+8166877511", {locale: "ja-JP"});
	
	var expected = "+81 6 687 7511";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatInternationalAccessCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "010",
		countryCode: "1",
		areaCode: "408",
		subscriberNumber: "4567890"
	});
	var expected = "010 1 408 456 7890";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatLongAreaCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0152410670", {locale:"ja-JP"});
	var expected = "0152-41-0670";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber("09017901357", {locale: "ja-JP"});
	var expected = "090-1790-1357";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+819012345678");
	var expected = "+81 90 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatService() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0301234567", {locale: "ja-JP"});
	var expected = "030-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatEmergency1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("116", {locale: "ja-JP"});
	var expected = "116 ";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatEmergency2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("136", {locale: "ja-JP"});
	var expected = "136 ";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+35311234567", {locale: "ja-JP"});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0", {locale:"ja-JP"});
	
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("04", {locale:"ja-JP"});
	var expected = "04-";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("047", {locale:"ja-JP"});
	var expected = "047-";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0475", {locale:"ja-JP"});
	var expected = "0475-";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("047512", {locale: "ja-JP"});
	var expected = "0475-12";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0475123", {locale: "ja-JP"});
	var expected = "0475-123";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("04751234", {locale: "ja-JP"});
	var expected = "0475-123-4";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("047512345", {locale: "ja-JP"});
	var expected = "0475-123-45";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0475123456", {locale: "ja-JP"});
	var expected = "0475-123-456";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("04751234567", {locale: "ja-JP"});
	var expected = "0475-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("047512345678", {locale: "ja-JP"});
	var expected = "0475-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0475123456789", {locale: "ja-JP"});
	var expected = "0475123456789";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("04", {locale: "ja-JP"});
	var expected = "04-";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("075", {locale: "ja-JP"});
	var expected = "075-";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0751", {locale: "ja-JP"});
	var expected = "075-1";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("07512", {locale: "ja-JP"});
		
	var expected = "075-12";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("075123", {locale: "ja-JP"});
	var expected = "075-123";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0751234", {locale: "ja-JP"});
	var expected = "075-1234";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("07512345", {locale: "ja-JP"});
	var expected = "075-12-345";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("075123456", {locale: "ja-JP"});
	var expected = "075-12-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0751234567", {locale: "ja-JP"});
	var expected = "075-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0Whole10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("07512345678", {locale: "ja-JP"});
	var expected = "075-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("075123456789", {locale: "ja-JP"});
	var expected = "075123456789";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "ja-JP"});
	var expected = "(03) ";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("075", {locale: "ja-JP"});
	var expected = "(075) ";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0751", {locale: "ja-JP"});
	var expected = "(075) 1";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("07512", {locale: "ja-JP"});
	var expected = "(075) 12";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("075123", {locale: "ja-JP"});
	var expected = "(075) 123";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0751234", {locale: "ja-JP"});
	var expected = "(075) 123-4";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("07512345", {locale: "ja-JP"});
	var expected = "(075) 12-345";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("075123456", {locale: "ja-JP"});
	var expected = "(075) 12-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0751234567", {locale: "ja-JP"});
	var expected = "(075) 123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle1Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("07512345678", {locale: "ja-JP"});
	var expected = "(075) 1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "かっこ"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("7", {locale: "ja-JP"});
	var expected = "7";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("73", {locale: "ja-JP"});
	var expected = "73";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("738", {locale: "ja-JP"});
	var expected = "738";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("7380", {locale: "ja-JP"});
	var expected = "738-0";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("73803", {locale: "ja-JP"});
	var expected = "738-03";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("738034", {locale: "ja-JP"});
	var expected = "738-034";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("7380343", {locale: "ja-JP"});
	var expected = "738-0343";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("73553433", {locale: "ja-JP"});
	var expected = "7355-3433";
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatStyle0PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("735534331", {locale: "ja-JP"});
	var expected = "735534331";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "ja-JP", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
