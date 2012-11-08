/*
 * testresources.js - test the Resources object
 * 
 * Copyright © 2012, JEDLSoft
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

ilib.data.resources_de = {
    "first string": "erste String",
    "second string": "zweite String",
    "third string": "dritte String"
};

ilib.data.resources_fr = {
    "first string": "première chaîne",
    "second string": "deuxième chaîne",
    "third string": "troisième chaîne",
    "arr": [
        "première",
        "deuxième",
        "troisième"
    ]
};

// yes, we know these are not accurate translations -- they are just for testing!
ilib.data.resources_fr_CA = {
    "first string": "première collier", 
    "second string": "deuxième collier",
    "arr": [
        "quatrième"
    ]
};

ilib.data.resources_fr_CA_govt = {
    "first string": "première corde", 
    "third string": "troisième corde"
};

ilib.data.tester_es = {
    "Hello from {country}": "Saludos desde {country}",
    "Hello from {city}": "Saludos desde {city}",
    "Greetings from {city} in {country}": "Saludos desde {city} en {country}",
    "key1": "Saludos desde {user}."
};

ilib.data.tester_es_MX = {
    "Hello from {country}": "Hola de {country}",
    "Greetings from {city} in {country}": "Hola de {city} en {country}"
};

ilib.data.tester_es_MX_slang = {
    "Hello from {country}": "Que tal de {country}",
    "Hello from {city}": "Que tal de {city}",
    "key1": "Buenas desde {user}."
};

ilib.data.tester_de = {
    "Hello from {country}": "Hallo aus {country}",
    "Hello from {city}": "Hallo aus {city}",
    "Greetings from {city} in {country}": "Grüße aus {city} in {country}",
    "key1": "Grüße vom {user}"
};

ilib.data.tester_zh = {
    "empty": "",
    "space": " ",
    "comma": ","
};

function testResBundleConstructorEmpty() {
    var rb = new ilib.ResBundle();
    
    assertNotNull(rb);
}

function testResBundleConstructorDefaultName() {
    var rb = new ilib.ResBundle();
    
    assertNotNull(rb);
    
    assertEquals("resources", rb.getName());
}

function testResBundleConstructorDefaultLocale() {
    var rb = new ilib.ResBundle();
    
    assertNotNull(rb);
    
    var loc = rb.getLocale();
    
    assertEquals("en-US", loc.toString());
}

function testResBundleConstructorOtherLocale() {
    var rb = new ilib.ResBundle({locale: "de-DE"});
    
    assertNotNull(rb);
    
    var loc = rb.getLocale();
    
    assertEquals("de-DE", loc.toString());
}

function testResBundleConstructorOtherName() {
    var rb = new ilib.ResBundle({name: "tester"});
    
    assertNotNull(rb);
    
    assertEquals("tester", rb.getName());
}

function testResBundleGetString() {
    var rb = new ilib.ResBundle(); // default locale
    
    assertNotNull(rb);
    
    assertEquals("first string", rb.getString("first string").toString());
    assertEquals("second string", rb.getString("second string").toString());
    assertEquals("third string", rb.getString("third string").toString());
}

function testResBundleGetStringde() {
    var rb = new ilib.ResBundle({locale: "de"});
    
    assertNotNull(rb);
    
    assertEquals("erste String", rb.getString("first string").toString());
    assertEquals("zweite String", rb.getString("second string").toString());
    assertEquals("dritte String", rb.getString("third string").toString());
}

function testResBundleGetStringfr() {
    var rb = new ilib.ResBundle({locale: "fr"});
    
    assertNotNull(rb);
    
    assertEquals("première chaîne", rb.getString("first string").toString());
    assertEquals("deuxième chaîne", rb.getString("second string").toString());
    assertEquals("troisième chaîne", rb.getString("third string").toString());
}

function testResBundleGetStringfrCA() {
    var rb = new ilib.ResBundle({locale: "fr-CA"});
    
    assertNotNull(rb);
    
    assertEquals("première collier", rb.getString("first string").toString());
    assertEquals("deuxième collier", rb.getString("second string").toString());
    assertEquals("troisième chaîne", rb.getString("third string").toString());
}

function testResBundleGetStringfrCAgovt() {
    var rb = new ilib.ResBundle({locale: "fr-CA-govt"});
    
    assertNotNull(rb);
    
    assertEquals("première corde", rb.getString("first string").toString());
    assertEquals("deuxième collier", rb.getString("second string").toString());
    assertEquals("troisième corde", rb.getString("third string").toString());
}

function testResBundleGetStringDefaultToParent() {
    var rb = new ilib.ResBundle({locale: "de-DE"});
    
    assertNotNull(rb);
    
    assertEquals("erste String", rb.getString("first string").toString());
    assertEquals("zweite String", rb.getString("second string").toString());
    assertEquals("dritte String", rb.getString("third string").toString());
}

function testResBundleGetStringDefaultToSource() {
    var rb = new ilib.ResBundle({locale: "ja-JP"});
    
    assertNotNull(rb);
    
    assertEquals("first string", rb.getString("first string").toString());
    assertEquals("second string", rb.getString("second string").toString());
    assertEquals("third string", rb.getString("third string").toString());
}

function testResBundleGetStringOtherBundle() {
    var rb = new ilib.ResBundle({name: "tester"});
    
    assertNotNull(rb);
    
    assertEquals("Hello from {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Hello from {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Greetings from {city} in {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundleesES() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "es-ES"
    });
    
    assertNotNull(rb);
    
    assertEquals("Saludos desde {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Saludos desde {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Saludos desde {city} en {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundleesMX() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "es-MX"
    });
    
    assertNotNull(rb);
    
    assertEquals("Hola de {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Saludos desde {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Hola de {city} en {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundleesMXslang() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "es-MX-slang"
    });
    
    assertNotNull(rb);
    
    assertEquals("Que tal de {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Que tal de {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Hola de {city} en {country}", rb.getString("Greetings from {city} in {country}").toString());
}


function testResBundleGetStringOtherBundlePsuedoRaw() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "raw"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {çõüñţŕÿ}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {çíţÿ}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {çíţÿ} íñ {çõüñţŕÿ}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoText() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoHtml() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoXml() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoDefault() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX"
    });
    
    assertNotNull(rb);
    
    // should be equivalent to "text" and not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringMissingBundlePsuedoHtml() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should still pseudo-translate, despite having no translations
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringPsuedoHtmlLengthenShort() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "html",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 50%
    assertEquals("Ħëľľõ fŕõm Pàŕíš76543210", rb.getString("Hello from Paris").toString());
}

function testResBundleGetStringPsuedoHtmlLengthenMedium() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "html",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 33%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf ľíğĥţš09876543210", rb.getString("Hello from Paris, city of lights").toString());
}

function testResBundleGetStringPsuedoHtmlLengthenLong() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "html",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 20%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf çüľţüŕë, ľíğĥţš, àñð šüþëŕb çüíšíñë.109876543210", rb.getString("Hello from Paris, city of culture, lights, and superb cuisine.").toString());
}

function testResBundleGetStringPsuedoLeaveHTMLTags() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <a href='url'>{city}</a>", rb.getString("Hello from <a href='url'>{city}</a>").toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLTagsRaw() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "raw"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <à ĥŕëf='üŕľ'>{çíţÿ}</à>", rb.getString("Hello from <a href='url'>{city}</a>").toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLTagsText() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <à ĥŕëf='üŕľ'>{city}</à>", rb.getString("Hello from <a href='url'>{city}</a>").toString());
}

function testResBundleGetStringPsuedoLeaveHTMLEntities() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {city} &amp; {country}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLEntitiesRaw() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "raw"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {çíţÿ} &àmþ; {çõüñţŕÿ}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLEntitiesText() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {city} &àmþ; {country}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringMissingBundlePsuedoXml() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    // should still pseudo-translate, despite having no translations
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringPsuedoXmlLengthenShort() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "xml",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 50%
    assertEquals("Ħëľľõ fŕõm Pàŕíš76543210", rb.getString("Hello from Paris").toString());
}

function testResBundleGetStringPsuedoXmlLengthenMedium() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "xml",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 33%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf ľíğĥţš09876543210", rb.getString("Hello from Paris, city of lights").toString());
}

function testResBundleGetStringPsuedoXmlLengthenLong() {
    var rb = new ilib.ResBundle({
        name: "asdfasdffoobar",
        locale: "xx-XX",
        type: "xml",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 20%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf çüľţüŕë, ľíğĥţš, àñð šüþëŕb çüíšíñë.109876543210", rb.getString("Hello from Paris, city of culture, lights, and superb cuisine.").toString());
}

function testResBundleGetStringPsuedoLeaveXmlTags() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <city type='large'>{city}</city>", rb.getString("Hello from <city type='large'>{city}</city>").toString());
}

function testResBundleGetStringPsuedoLeaveXmlEntities() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "xx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {city} &amp; {country}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringWithKeyNamees() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "es"
    });
    
    assertNotNull(rb);
    
    assertEquals("Saludos desde {user}.", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNameesMX() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "es-MX"
    });
    
    assertNotNull(rb);
    
    assertEquals("Saludos desde {user}.", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNameesMXslang() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "es-MX-slang"
    });
    
    assertNotNull(rb);
    
    assertEquals("Buenas desde {user}.", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNamedeDE() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "de-DE"
    });
    
    assertNotNull(rb);
    
    assertEquals("Grüße vom {user}", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNameUnknown() {
    var rb = new ilib.ResBundle({
        name: "tester",
        locale: "de-DE"
    });
    
    assertNotNull(rb);
    
    assertEquals("Hello from {user}.", rb.getString("Hello from {user}.", "key3").toString());
}

function testResBundleGetResObj() {
    var rb = new ilib.ResBundle({locale: "fr"});
    
    assertNotNull(rb);
    
    var obj = rb.getResObj();
    
    assertEquals("première chaîne", obj["first string"]);
    assertEquals("deuxième chaîne", obj["second string"]);
    assertEquals("troisième chaîne", obj["third string"]);
    assertNotUndefined(obj.arr);
    assertEquals("première", obj.arr[0]);
    assertEquals("deuxième", obj.arr[1]);
    assertEquals("troisième", obj.arr[2]);
    assertUndefined(obj.arr[3]);
}

function testResBundleGetResObjMerge() {
    var rb = new ilib.ResBundle({locale: "fr-CA"});
    
    assertNotNull(rb);
    
    var obj = rb.getResObj();
    
    assertEquals("première collier", obj["first string"]);
    assertEquals("deuxième collier", obj["second string"]);
    assertEquals("troisième chaîne", obj["third string"]);
    assertNotUndefined(obj.arr);
    assertEquals("première", obj.arr[0]);
    assertEquals("deuxième", obj.arr[1]);
    assertEquals("troisième", obj.arr[2]);
    assertEquals("quatrième", obj.arr[3]);
}

function testResBundleGetStringAcceptEmptyTranslations() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals("", rb.getString("empty").toString());
}

function testResBundleGetStringNonExistantTranslations() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    // should return source
    assertEquals("foobar", rb.getString("foobar").toString());
}

function testResBundleGetStringAcceptSpaceTranslations() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(" ", rb.getString("space").toString());
}

function testResBundleGetStringAcceptCommaTranslations() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(",", rb.getString("comma").toString());
}

function testResBundleGetStringAcceptEmptyTranslationsWithKey() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals("", rb.getString("asdf", "empty").toString());
}

function testResBundleGetStringAcceptNonExistantTranslationsWithKey() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    // should return source
    assertEquals("asdf", rb.getString("asdf", "foobar").toString());
}

function testResBundleGetStringAcceptSpaceTranslationsWithKey() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(" ", rb.getString("asdf", "space").toString());
}

function testResBundleGetStringAcceptCommaTranslationsWithKey() {
    var rb = new ilib.ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(",", rb.getString("asdf", "comma").toString());
}

function testResBundleGetStringNoResourcesReturnSource() {
   var rb = new ilib.ResBundle({
     name: "tester",
     locale: "zz-ZZ"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a test.", rb.getString("This is a test.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceHtmlTypeHtml() {
   var rb = new ilib.ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a <b>test</b>. A&amp;P.", rb.getString("This is a <b>test</b>. A&amp;P.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceHtmlTypejs() {
   var rb = new ilib.ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "js"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a <b>test</b>. A&amp;P.", rb.getString("This is a <b>test</b>. A&amp;P.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypejsNoEscape() {
   var rb = new ilib.ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "js"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a 'test'.", rb.getString("This is a 'test'.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypejsWithEscape() {
   var rb = new ilib.ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "js"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a \\'test\\'.", rb.getString("This is a 'test'.", undefined, "js").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypeHtmlWithEscape() {
   var rb = new ilib.ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a &lt;b&gt;test&lt;/b&gt;. A&amp;amp;P.", rb.getString("This is a <b>test</b>. A&amp;P.", undefined, "html").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypeHtmlWithEscapeJS() {
   var rb = new ilib.ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is <a href=\\\"a test\\\">a \\'test\\'</a>.", rb.getString("This is <a href=\"a test\">a 'test'</a>.", undefined, "js").toString());
}

function testResBundleGetStringPsuedoHtmlNoEscape() {
   var rb = new ilib.ResBundle({
       name: "asdfasdffoobar",
       locale: "xx-XX",
       type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("Ħëľľõ fŕõm <a href=\"asdf\">Pàŕíš</a>, çíţÿ õf ľíğĥţš.", rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.").toString());
}

function testResBundleGetStringPsuedoHtmlEscapeHtml() {
   var rb = new ilib.ResBundle({
       name: "asdfasdffoobar",
       locale: "xx-XX",
       type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("Ħëľľõ fŕõm &lt;a href=\"asdf\"&gt;Pàŕíš&lt;/a&gt;, çíţÿ õf ľíğĥţš.", rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.", undefined, "html").toString());
}

function testResBundleGetStringPsuedoHtmlEscapeJS() {
   var rb = new ilib.ResBundle({
       name: "asdfasdffoobar",
       locale: "xx-XX",
       type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("Ħëľľõ fŕõm <a href=\\\"asdf\\\">Pàŕíš</a>, çíţÿ õf ľíğĥţš.", rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.", undefined, "js").toString());
}
