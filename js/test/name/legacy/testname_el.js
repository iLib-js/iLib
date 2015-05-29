/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICJASE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testParseSimpleName_el_GR() {
	var parsed = new ilib.Name("Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSimpleName_el_GR() {
	var parsed = new ilib.Name("Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_el_GR() {
	var parsed = new ilib.Name("Νικόλαος Αλεξόπουλος κατώτερος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		 suffix : "κατώτερος",
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_el_GR1() {
	var parsed = new ilib.Name("Ο κ. Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Ο κ.",
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_el_GR_second() {
	var parsed = new ilib.Name("Κυρία. Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Κυρία.",
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitleWithFamilyOnlyAndAdjunct_el_GR() {

	var name = new ilib.Name({
		prefix: "Ο κ.",
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος",
		suffix: "μουσκεύω"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Ο κ. Νικόλαος Αλεξόπουλος μουσκεύω";
	
	assertEquals(expected, formatted);

};


function testParseTitleWithFamilyOnlyAndAdjunctex_el_GR() {
	var parsed = new ilib.Name("αντιπρόεδρος Νικόλαος Αλεξόπουλος μουσκεύω", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "αντιπρόεδρος",
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος",
		suffix : "μουσκεύω"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseCompoundHonorific_el_GR() {
	var parsed = new ilib.Name("Ο κ. Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Ο κ.",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_el_GR() {
	var name = new ilib.Name({
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Νικόλαος Αλεξόπουλος";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_el_GR() {
	var name = new ilib.Name({
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Νικόλαος Αλεξόπουλος";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_el_GR() {
	var name = new ilib.Name({
		
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος",
		suffix: "μουσκεύω"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Νικόλαος Αλεξόπουλος μουσκεύω";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_el_GR() {
	var name = new ilib.Name({
		suffix: "μουσκεύω",
		givenName: "Νικόλαος",
		familyName: "Αλεξόπουλος"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Νικόλαος Αλεξόπουλος";
	
	assertEquals(expected, formatted);
};


function testFormatAsianNameMedium_el_GR() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_el_GR() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



