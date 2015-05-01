/*
 * testname_de.js - test the name object in German
 * 
 * Copyright © 2013-2015, JEDLSoft
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testDEParseSimpleName_bg_BG() {
	var parsed = new Name("Мария Георгиева", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Мария",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseAdjunctNames_bg_BG() {
	var parsed = new Name("Стоян Драганов", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Стоян",
		familyName: "Драганов"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSingleNameWithPrefixAndAdjunct_bg_BG() {
	var parsed = new Name("сестра Драганов", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "сестра",
		familyName: "Драганов"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_bg_BG() {
	var parsed = new Name("Мария Георгиева младши", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "младши",
		givenName: "Мария",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseTitleWithFamilyOnly_bg_BG() {
	var parsed = new Name("сестра. Георгиева", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "сестра.",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseEverything_bg_BG() {
	var parsed = new Name("баба Мария Георгиева", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "баба",
		givenName: "Мария",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testDEFormatSimpleNameShort_bg_BG() {
	var name = new Name({
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium_bg_BG() {
	var name = new Name({
		givenName: "Мария",
		
		familyName: "Георгиева"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameLong_bg_BG() {
	var name = new Name({
		givenName: "Мария",
		
		familyName: "Георгиева",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull_bg_BG() {
	var name = new Name({
		prefix: "лекар",
		givenName: "Мария",
		
		familyName: "Георгиева",
		suffix: " MdB"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "лекар Мария Георгиева MdB";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort_bg_BG() {
	var name = new Name({
		prefix: "лекар",
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameMedium_bg_BG() {
	var name = new Name({
		prefix: "лекар",
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameLong_bg_BG() {
	var name = new Name({
		prefix: "лекар",
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "лекар Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameShort_bg_BG() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameMedium_bg_BG() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong_bg_BG() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};






function testDEParseSimpleName_cs_CZ() {
	var parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseTripleName_cs_CZ() {
	var parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseSingleNameWithPrefixAndAdjunct_cs_CZ() {
	var parsed = new Name("prezident Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "prezident",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseHypenatedName_cs_CZ() {
	var parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseTitle_cs_CZ() {
	var parsed = new Name("prezident Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "prezident",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_cs_CZ1() {
	var parsed = new Name("předsedkyně Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "předsedkyně",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseTitleWithFamilyOnlyAndAdjunct_cs_CZ() {
	var parsed = new Name("viceprezident Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "viceprezident",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseEverything_cs_CZ() {
	var parsed = new Name("dáma Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "dáma",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseCompoundHonorific_cs_CZ() {
	var parsed = new Name("šéfkuchař Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "šéfkuchař",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseCompoundHonorific_cs_CZ1() {
	var parsed = new Name("Dr. Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testDEFormatSimpleNameShort_cs_CZ() {
	var name = new Name({
		givenName: "Yana",
		familyName: "Synkova"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana Synkova";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium_cs_CZ() {
	var name = new Name({
		givenName: "Yana",
		familyName: "Synkova"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana Synkova";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameLong_cs_CZ() {
	var name = new Name({
		givenName: "Yana",
		familyName: "Synkova",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana Synkova";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull_cs_CZ() {
	var name = new Name({
		prefix: "prezidentí ministerský předseda",
		givenName: "Yana",
		familyName: "Synkova",
		suffix: "v důchodu"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "prezidentí ministerský předseda Yana Synkova v důchodu";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort_cs_CZ() {
	var name = new Name({
		prefix: "prezidentí ministerský",
		givenName: "Yana",
		familyName: "von Synkova"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana von Synkova";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameMedium_cs_CZ() {
	var name = new Name({
		prefix: "prezidentí ministerský",
		givenName: "Yana",
		familyName: "von Synkova"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana von Synkova";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameLong_cs_CZ() {
	var name = new Name({
		prefix: "prezidentí ministerský",
		givenName: "Yana",
		familyName: "von Synkova"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "prezidentí ministerský Yana von Synkova";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameShort_cs_CZ() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameMedium_cs_CZ() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong_cs_CZ() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};

//test cases for dutch 


function testDEParseSimpleName_da_DK() {
	var parsed = new Name("Raeburn van Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Raeburn",
		familyName: "van Buren"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseAdjunctNames_da_DK() {
	var parsed = new Name("Humphrey Dallas Bogart", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Humphrey",
		middleName: "Dallas",
		familyName: "Bogart"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseSingleName_da_DK() {
	var parsed = new Name("Armin", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Armin",
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSingleNameWithPrefixAndAdjunct_da_DK() {
	var parsed = new Name("meneer Raeburn van Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "meneer",
		familyName: "van Buren"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseHypenatedName_da_DK() {
	var parsed = new Name("Raeburn van Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Raeburn",
		familyName: "van Buren"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseQuadrupleName_da_DK() {
	var parsed = new Name("Raeburn Jürgen van Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Raeburn",
		middleName: "Jürgen",
		familyName: "van Buren"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseTitle_da_DK() {
	var parsed = new Name("meneer Dr. Raeburn van Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "meneer Dr.",
		givenName: "Raeburn",
		familyName: "van Buren"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseTitle_da_DK() {
	var parsed = new Name("meneer Dr. Raeburn van Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "meneer Dr.",
		givenName: "Raeburn",
		familyName: "van Buren"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitleWithFamilyOnly_da_DK() {
	var parsed = new Name("meneer van Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "meneer",
		familyName: "van Buren"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseHonorific_da_DK() {
	var parsed = new Name("Fr. Julia Maier", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Fr.",
		givenName: "Julia",
		familyName: "Maier"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseEverything_da_DK() {
	var parsed = new Name("guvernør Raeburn Jürgen van Buren pensioneret", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "guvernør",
		givenName: "Raeburn",
		middleName: "Jürgen",
		familyName: "van Buren",
		suffix: "pensioneret"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseCompoundHonorific_da_DK() {
	var parsed = new Name("Mr. Buren", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mr.",
		familyName: "Buren"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testDEFormatSimpleNameShort_da_DK() {
	var name = new Name({
		givenName: "Raeburn",
		middleName: "Michael",
		familyName: "van Buren"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Raeburn van Buren";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium_da_DK() {
	var name = new Name({
		givenName: "Raeburn",
		familyName: "van Buren"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Raeburn van Buren";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameLong_da_DK() {
	var name = new Name({
		givenName: "Raeburn",
		familyName: "van Buren",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Raeburn van Buren";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull_da_DK() {
	var name = new Name({
		prefix: "meneer Dr.",
		givenName: "Raeburn",
		familyName: "van Buren",
		suffix: "pensioneret"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "meneer Dr. Raeburn van Buren pensioneret";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort_da_DK() {
	var name = new Name({
		prefix: "meneer Dr.",
		givenName: "Raeburn",
		middleName: "Michael Uwe",
		familyName: "von van Buren",
		suffix: "pensioneret"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Raeburn von van Buren";
	
	assertEquals(expected, formatted);
};



function testDEFormatComplexNameLong_da_DK() {
	var name = new Name({
		prefix: "meneer Dr.",
		givenName: "Raeburn",
		middleName: "Michael Uwe",
		familyName: "von van Buren",
		suffix: "pensioneret"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "meneer Dr. Raeburn Michael Uwe von van Buren pensioneret";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameShort_da_DK() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameMedium_da_DK() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong_da_DK() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'da-DK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
