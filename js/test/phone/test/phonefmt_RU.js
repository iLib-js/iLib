/*
 * phonefmt_RU.js - Test the phonefmt_RU Style.
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
function testFormatRUStyle0() {
	var formatted;
	var parsed = new PhoneNumber("88122345678", {locale:"ru-RU"});
	var expected = "8 (812) 234-56-78";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1() {
	var formatted;
	var parsed = new PhoneNumber("83852234567", {locale: "ru-RU"});
	var expected = "8 (3852) 23-45-67";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUInternational() {
	var formatted;
	var parsed = new PhoneNumber("+78123289701", {locale: "ru-RU"});
	
	var expected = "+7 812 328-97-01";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUInternationalAccessCode() {
	var formatted;

	var parsed = new PhoneNumber("81014084567890", {locale: "ru-RU"});

	var expected = "810 1 408 456 7890";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRULongAreaCode() {
	var formatted;
	var parsed = new PhoneNumber("84132234567", {locale:"ru-RU"});
	var expected = "8 (41322) 3-45-67";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUMobile() {
	var formatted;
	var parsed = new PhoneNumber("89012345678", {locale: "ru-RU"});
	var expected = "8-901-234-5678";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUMobileInternational() {
	var formatted;
	
	var parsed = new PhoneNumber("+79015551234");
	var expected = "+7 901-555-1234";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUService() {
	var formatted;
	var parsed = new PhoneNumber("88001234567", {locale: "ru-RU"});
	var expected = "8 (800) 123-45-67";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUEmergency1() {
	var formatted;
	var parsed = new PhoneNumber("101", {locale: "ru-RU"});
	var expected = "101";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUEmergency2() {
	var formatted;
	var parsed = new PhoneNumber("112", {locale: "ru-RU"});
	var expected = "112";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUIEIDD() {
	var formatted;
	var parsed = new PhoneNumber("+35311234567", {locale: "ru-RU"});
	var expected = "+353 1 123 4567";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial0() {
	var formatted;
	var parsed = new PhoneNumber("8", {locale:"ru-RU"});
	
	var expected = "8";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber("88", {locale:"ru-RU"});
	var expected = "88";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber("881", {locale:"ru-RU"});
	var expected = "881";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber("8812", {locale:"ru-RU"});
	var expected = "8 (812) ";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
	var expected = "8 (812) 2";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
	var expected = "8 (812) 23";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
	var expected = "8 (812) 234";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
	var expected = "8 (812) 234-5";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
	var expected = "8 (812) 2-34-56";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial9() {
	var formatted;
	var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
	var expected = "8 (812) 23-45-67";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial10() {
	var formatted;
	var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
	var expected = "8 (812) 234-56-78";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Partial11() {
	var formatted;
	var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
	var expected = "881223456789";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole0() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "8"
	});
	var expected = "8";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole1() {
	var formatted;
	var parsed = new PhoneNumber("88", {locale: "ru-RU"});
	var expected = "88";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole2() {
	var formatted;
	var parsed = new PhoneNumber("881", {locale: "ru-RU"});
	var expected = "881";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole3() {
	var formatted;
	var parsed = new PhoneNumber("8812", {locale: "ru-RU"});
	var expected = "8 (812) ";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole4() {
	var formatted;
	var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
		
	var expected = "8 (812) 2";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole5() {
	var formatted;
	var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
	var expected = "8 (812) 23";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole6() {
	var formatted;
	var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
	var expected = "8 (812) 234";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole7() {
	var formatted;
	var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
	var expected = "8 (812) 234-5";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole8() {
	var formatted;
	var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
	var expected = "8 (812) 2-34-56";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole9() {
	var formatted;
	var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
	var expected = "8 (812) 23-45-67";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole10() {
	var formatted;
	var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
	var expected = "8 (812) 234-56-78";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0Whole11() {
	var formatted;
	var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
	var expected = "881223456789";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial0() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "8"
	});
	var expected = "8";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial1() {
	var formatted;
	var parsed = new PhoneNumber("88", {locale: "ru-RU"});
	var expected = "88";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial2() {
	var formatted;
	var parsed = new PhoneNumber("881", {locale: "ru-RU"});
	var expected = "881";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial3() {
	var formatted;
	var parsed = new PhoneNumber("8812", {locale: "ru-RU"});
	var expected = "8.812.";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial4() {
	var formatted;
	var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
	var expected = "8.812.2";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial5() {
	var formatted;
	var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
	var expected = "8.812.23";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial6() {
	var formatted;
	var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
	var expected = "8.812.234";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial7() {
	var formatted;
	var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
	var expected = "8.812.234-5";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial8() {
	var formatted;
	var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
	var expected = "8.812.2-34-56";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial9() {
	var formatted;
	var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
	var expected = "8.812.23-45-67";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial10() {
	var formatted;
	var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
	var expected = "8.812.234-56-78";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle1Partial10() {
	var formatted;
	var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
	var expected = "881223456789";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber("2", {locale: "ru-RU"});
	var expected = "2";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber("23", {locale: "ru-RU"});
	var expected = "23";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber("234", {locale: "ru-RU"});
	var expected = "234";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber("2345", {locale: "ru-RU"});
	var expected = "234-5";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber("23456", {locale: "ru-RU"});
	var expected = "2-34-56";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber("234567", {locale: "ru-RU"});
	var expected = "23-45-67";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber("2345678", {locale: "ru-RU"});
	var expected = "234-56-78";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatRUStyle0PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber("23456789", {locale: "ru-RU"});
	var expected = "23456789";
	
	var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};