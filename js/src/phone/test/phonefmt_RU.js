/*
 * phonefmt_RU.js - Test the phonefmt_RU Style.
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
	var parsed = new ilib.PhoneNumber("88122345678", {locale:"ru-RU"});
	var expected = "8.812.234-56-78";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("83852234567", {locale: "ru-RU"});
	var expected = "8.3852.23-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+78123289701", {locale: "ru-RU"});
	
	var expected = "+7 812 328-97-01";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatInternationalAccessCode() {
	var formatted;

	var parsed = new ilib.PhoneNumber("81014084567890", {locale: "ru-RU"});

	var expected = "810 1 408 456 7890";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatLongAreaCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber("84132234567", {locale:"ru-RU"});
	var expected = "8.41322.3-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber("9012345678", {locale: "ru-RU"});
	var expected = "901-234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobileInternational() {
	var formatted;
	
	var parsed = new ilib.PhoneNumber("+79015551234");
	var expected = "+7 901-555-1234";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatService() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88001234567", {locale: "ru-RU"});
	var expected = "8.800.123-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatEmergency1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("101", {locale: "ru-RU"});
	var expected = "101";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatEmergency2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("112", {locale: "ru-RU"});
	var expected = "112";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+35311234567", {locale: "ru-RU"});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8", {locale:"ru-RU"});
	
	var expected = "8";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88", {locale:"ru-RU"});
	var expected = "88";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881", {locale:"ru-RU"});
	var expected = "881";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812", {locale:"ru-RU"});
	var expected = "8.812.";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122", {locale: "ru-RU"});
	var expected = "8.812.2";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223", {locale: "ru-RU"});
	var expected = "8.812.23";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812234", {locale: "ru-RU"});
	var expected = "8.812.234";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122345", {locale: "ru-RU"});
	var expected = "8.812.234-5";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223456", {locale: "ru-RU"});
	var expected = "8.812.2-34-56";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812234567", {locale: "ru-RU"});
	var expected = "8.812.23-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122345678", {locale: "ru-RU"});
	var expected = "8.812.234-56-78";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223456789", {locale: "ru-RU"});
	var expected = "881223456789";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "8"
	});
	var expected = "8";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88", {locale: "ru-RU"});
	var expected = "88";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881", {locale: "ru-RU"});
	var expected = "881";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812", {locale: "ru-RU"});
	var expected = "8.812.";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122", {locale: "ru-RU"});
		
	var expected = "8.812.2";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223", {locale: "ru-RU"});
	var expected = "8.812.23";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812234", {locale: "ru-RU"});
	var expected = "8.812.234";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122345", {locale: "ru-RU"});
	var expected = "8.812.234-5";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223456", {locale: "ru-RU"});
	var expected = "8.812.2-34-56";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812234567", {locale: "ru-RU"});
	var expected = "8.812.23-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122345678", {locale: "ru-RU"});
	var expected = "8.812.234-56-78";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223456789", {locale: "ru-RU"});
	var expected = "881223456789";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "8"
	});
	var expected = "8";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88", {locale: "ru-RU"});
	var expected = "88";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881", {locale: "ru-RU"});
	var expected = "881";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812", {locale: "ru-RU"});
	var expected = "8 (812) ";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122", {locale: "ru-RU"});
	var expected = "8 (812) 2";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223", {locale: "ru-RU"});
	var expected = "8 (812) 23";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812234", {locale: "ru-RU"});
	var expected = "8 (812) 234";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122345", {locale: "ru-RU"});
	var expected = "8 (812) 234-5";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223456", {locale: "ru-RU"});
	var expected = "8 (812) 2-34-56";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("8812234567", {locale: "ru-RU"});
	var expected = "8 (812) 23-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("88122345678", {locale: "ru-RU"});
	var expected = "8 (812) 234-56-78";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("881223456789", {locale: "ru-RU"});
	var expected = "881223456789";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "bracket"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2", {locale: "ru-RU"});
	var expected = "2";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("23", {locale: "ru-RU"});
	var expected = "23";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("234", {locale: "ru-RU"});
	var expected = "234";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2345", {locale: "ru-RU"});
	var expected = "234-5";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("23456", {locale: "ru-RU"});
	var expected = "2-34-56";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("234567", {locale: "ru-RU"});
	var expected = "23-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2345678", {locale: "ru-RU"});
	var expected = "234-56-78";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("23456789", {locale: "ru-RU"});
	var expected = "23456789";
	
	var fmt = new ilib.PhoneFmt({locale: "ru-RU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};