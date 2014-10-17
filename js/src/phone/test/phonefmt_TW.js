/*
 * phonefmt_TW.js - Test the phonefmt_TW Style.
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
	var parsed = new ilib.PhoneNumber("039606537", {locale:"zh-TW"});
	var expected = "(039) 606-537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039606537", {locale: "zh-TW"});
	var expected = "039 606 537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039606537", {locale: "zh-TW"});
	var expected = "039-606-537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039606537", {locale: "zh-TW"});
	var expected = "(039) 606537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+886233663366", {locale: "zh-TW"});
	
	var expected = "+886 2 3366 3366";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatInternationalAccessCode() {
	var formatted;

	var parsed = new ilib.PhoneNumber("00214084567890", {locale: "zh-TW"});
	
	var expected = "002 1 408 456 7890";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatLongAreaCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber("04582410670", {locale:"zh-TW"});
	var expected = "(0458) 241-0670";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0912-345-678", {locale: "zh-TW"});
	var expected = "0912-345-678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+886912345678");
	var expected = "+886 912 345 678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatService() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0800011765", {locale: "zh-TW"});
	var expected = "0800-011-765";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatEmergency1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("166", {locale: "zh-TW"});
	var expected = "166 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatEmergency2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("110", {locale: "zh-TW"});
	var expected = "110 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+35311234567", {locale: "zh-TW"});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0", {locale:"zh-TW"});
	
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale:"zh-TW"});
	var expected = "(03) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale:"zh-TW"});
	var expected = "(039) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale:"zh-TW"});
	var expected = "(039) 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "(039) 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "(039) 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "(039) 612-3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "(039) 612-34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "(039) 612-345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "(039) 612-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "(039) 6123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "(03) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "(039) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "(039) 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
		
	var expected = "(039) 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "(039) 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "(039) 612-3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "(039) 612-34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "(039) 612-345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "(039) 612-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "(039) 6123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0Whole11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "03 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "039 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "039 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "039 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "039 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "039 612 3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "039 612 34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "039 612 345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "039 612 3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "039 6123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle1Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "03-";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "039-";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "039-6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "039-61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "039-612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "039-612-3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "039-612-34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "039-612-345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "039-612-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "039-6123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle2Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "(03) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "(039) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "(039) 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "(039) 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "(039) 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "(039) 6123";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "(039) 61234";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "(039) 612345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "(039) 6123456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "(039) 61234567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle3Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2", {locale: "zh-TW"});
	var expected = "2";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("27", {locale: "zh-TW"});
	var expected = "27";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("271", {locale: "zh-TW"});
	var expected = "271";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2712", {locale: "zh-TW"});
	var expected = "271-2";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("27123", {locale: "zh-TW"});
	var expected = "271-23";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("271234", {locale: "zh-TW"});
	var expected = "271-234";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2712345", {locale: "zh-TW"});
	var expected = "271-2345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("27123456", {locale: "zh-TW"});
	var expected = "2712-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatStyle0PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("271234567", {locale: "zh-TW"});
	var expected = "271234567";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};