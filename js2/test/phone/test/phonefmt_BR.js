/*
 * phonefmt_BR.js - Test the phonefmt_BR Style.
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
function testFormatBRStyle0() {
	var formatted;
	var parsed = new PhoneNumber("0211123456789", {locale:"pt-BR"});
	var expected = "0 21 11 2345-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle1() {
	var formatted;
	var parsed = new PhoneNumber("06687954567", {locale: "pt-BR"});
	var expected = "066 8795-4567";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRInternational() {
	var formatted;
	var parsed = new PhoneNumber("+556123456789", {locale: "pt-BR"});
	
	var expected = "+55 61 2345-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRInternational() {
	var formatted;
	var parsed = new PhoneNumber("004114084567890", {locale: "pt-BR"});
	
	var expected = "00 41 1 408 456 7890";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRInternationalAccessCode() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "0041",
		countryCode: "1",
		areaCode: "408",
		subscriberNumber: "4567890"
	});
	var expected = "00 41 1 408 456 7890";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRLongAreaCode() {
	var formatted;
	var parsed = new PhoneNumber("0211123456789", {locale:"pt-BR"});
	var expected = "0 21 11 2345-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRMobile() {
	var formatted;
	var parsed = new PhoneNumber("923456789", {locale: "pt-BR"});
	var expected = "92345-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRMobileInternational() {
	var formatted;
	var parsed = new PhoneNumber("+5511901456789");
	var expected = "+55 11 90145-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRService() {
	var formatted;
	var parsed = new PhoneNumber("03002345678", {locale: "pt-BR"});
	var expected = "0300-234-5678";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBREmergency1() {
	var formatted;
	var parsed = new PhoneNumber("192", {locale: "pt-BR"});
	var expected = "192";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBREmergency2() {
	var formatted;
	var parsed = new PhoneNumber("198", {locale: "pt-BR"});
	var expected = "198";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRIEIDD() {
	var formatted;
	var parsed = new PhoneNumber("+35311234567", {locale: "pt-BR"});
	var expected = "+353 1 123 4567";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial0() {
	var formatted;
	var parsed = new PhoneNumber("0", {locale:"pt-BR"});
	
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber("02", {locale:"pt-BR"});
	var expected = "02";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber("021", {locale:"pt-BR"});
	var expected = "0 21 ";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber("0211", {locale:"pt-BR"});
	var expected = "0 21 1";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber("02111", {locale: "pt-BR"});
	var expected = "0 21 11";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber("02111", {locale: "pt-BR"});
	var expected = "0 21 11";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber("021112", {locale: "pt-BR"});
	var expected = "0 21 112";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber("0211123", {locale: "pt-BR"});
	var expected = "0 21 112-3";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber("02111234", {locale: "pt-BR"});
	var expected = "0 21 112-34";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial9() {
	var formatted;
	var parsed = new PhoneNumber("021112345", {locale: "pt-BR"});
	var expected = "0 21 112-345";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial10() {
	var formatted;
	var parsed = new PhoneNumber("0211123456", {locale: "pt-BR"});
	var expected = "0 21 112-3456";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial11() {
	var formatted;
	var parsed = new PhoneNumber("02111234567", {locale: "pt-BR"});
	var expected = "0 21 1123-4567";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial12() {
	var formatted;
	var parsed = new PhoneNumber("021112345678", {locale: "pt-BR"});
	var expected = "0 21 11 234-5678";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Partial13() {
	var formatted;
	var parsed = new PhoneNumber("0211123456789", {locale: "pt-BR"});
	var expected = "0 21 11 2345-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole0() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole1() {
	var formatted;
	var parsed = new PhoneNumber("02", {locale: "pt-BR"});
	var expected = "02";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole2() {
	var formatted;
	var parsed = new PhoneNumber("021", {locale: "pt-BR"});
	var expected = "0 21 ";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole3() {
	var formatted;
	var parsed = new PhoneNumber("0211", {locale: "pt-BR"});
	var expected = "0 21 1";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole4() {
	var formatted;
	var parsed = new PhoneNumber("02111", {locale: "pt-BR"});
		
	var expected = "0 21 11";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole5() {
	var formatted;
	var parsed = new PhoneNumber("021112", {locale: "pt-BR"});
	var expected = "0 21 112";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole6() {
	var formatted;
	var parsed = new PhoneNumber("0211123", {locale: "pt-BR"});
	var expected = "0 21 1123";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole7() {
	var formatted;
	var parsed = new PhoneNumber("02111234", {locale: "pt-BR"});
	var expected = "0 21 11-234";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole8() {
	var formatted;
	var parsed = new PhoneNumber("021112345", {locale: "pt-BR"});
	var expected = "0 21 112-345";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole9() {
	var formatted;
	var parsed = new PhoneNumber("0211123456", {locale: "pt-BR"});
	var expected = "0 21 112-3456";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0Whole10() {
	var formatted;
	var parsed = new PhoneNumber("02111234567", {locale: "pt-BR"});
	var expected = "0 21 1123-4567";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole11() {
	var formatted;
	var parsed = new PhoneNumber("021112345678", {locale: "pt-BR"});
	var expected = "0 21 11 234-5678";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole12() {
	var formatted;
	var parsed = new PhoneNumber("0211123456789", {locale: "pt-BR"});
	var expected = "0 21 11 2345-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0Whole13() {
	var formatted;
	var parsed = new PhoneNumber("0211123456789766", {locale: "pt-BR"});
	var expected = "0211123456789766";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber("2", {locale: "pt-BR"});
	var expected = "2";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber("23", {locale: "pt-BR"});
	var expected = "23";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber("234", {locale: "pt-BR"});
	var expected = "234";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber("2345", {locale: "pt-BR"});
	var expected = "234-5";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber("23456", {locale: "pt-BR"});
	var expected = "234-56";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber("234567", {locale: "pt-BR"});
	var expected = "234-567";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber("2345678", {locale: "pt-BR"});
	var expected = "234-5678";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatBRStyle0PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber("23456789", {locale: "pt-BR"});
	var expected = "2345-6789";
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBRStyle0PartialLocal9() {
	var formatted;
	var parsed = new PhoneNumber("234567898", {locale: "pt-BR"});
	var expected = "234567898";	// use last resort rule
	
	var fmt = new PhoneFmt({locale: "pt-BR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
