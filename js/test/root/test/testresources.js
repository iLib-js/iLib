/*
 * testresources.js - test the Resources object
 * 
 * Copyright © 2012-2015, JEDLSoft
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
var ResBundle = require("./../lib/ResBundle.js");
var Locale = require("./../lib/Locale.js");

ilib.data.strings = {
    "first string": "first",
    "second string": "second",
    "third string": "third"
};

ilib.data.strings_de = {
    "first string": "erste String",
    "second string": "zweite String",
    "third string": "dritte String"
};

ilib.data.strings_fr = {
    "first string": "première chaîne",
    "second string": "deuxième chaîne",
    "third string": "troisième chaîne"
};

// yes, we know these are not accurate translations -- they are just for testing!
ilib.data.strings_fr_CA = {
    "first string": "première collier", 
    "second string": "deuxième collier"
};

ilib.data.strings_fr_CA_govt = {
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

ilib.data.tester2 = {
	" This is a test. ": "test1",
	"This is a test. ": "test2",
	" This is a test.": "test3"
};

ilib.data.tester2_de = {
	" This is a test. ": "detest1",
	"This is a test. ": "detest2",
	" This is a test.": "detest3"
};

ilib.data.mock_foobar = ilib.data.strings;
ilib.data.mock_foobar_de = ilib.data.strings_de;

function mockLoader(paths, sync, params, callback) {
    var data = [];
    
    function getResName(path) {
        var last = path.lastIndexOf('/');
        var base = path.substring(last+1);
        var dot = base.lastIndexOf('.');
        base = base.substring(0, dot);
        var loc = path.substring(0, last).replace(/\//g, '_');
        var name = "mock_" + base;
        if (loc && loc.length > 0) {
            name += '_' + loc;
        }
        return name;
    }
    
    for (var i = 0; i < paths.length; i++) {
        data.push(ilib.data[getResName(paths[i])]);
    }
    
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);
    }
    return data;
};


function testResBundleConstructorEmpty() {
	ilib.clearPseudoLocales();
	
    var rb = new ResBundle();
    
    assertNotNull(rb);
}

function testResBundleConstructorDefaultName() {
    var rb = new ResBundle();
    
    assertNotNull(rb);
    
    assertEquals("strings", rb.getName());
}

function testResBundleConstructorDefaultLocale() {
    var rb = new ResBundle();
    
    assertNotNull(rb);
    
    var loc = rb.getLocale();
    
    assertEquals("en-US", loc.toString());
}

function testResBundleConstructorOtherLocale() {
    var rb = new ResBundle({locale: "de-DE"});
    
    assertNotNull(rb);
    
    var loc = rb.getLocale();
    
    assertEquals("de-DE", loc.toString());
}

function testResBundleConstructorOtherName() {
    var rb = new ResBundle({name: "tester"});
    
    assertNotNull(rb);
    
    assertEquals("tester", rb.getName());
}

function testResBundleGetString() {
    var rb = new ResBundle(); // default locale
    
    assertNotNull(rb);
    
    assertEquals("first", rb.getString("first string").toString());
    assertEquals("second", rb.getString("second string").toString());
    assertEquals("third", rb.getString("third string").toString());
}

function testResBundleGetStringJS() {
    var rb = new ResBundle(); // default locale
    
    assertNotNull(rb);
    
    assertEquals("first", rb.getStringJS("first string"));
    assertEquals("second", rb.getStringJS("second string"));
    assertEquals("third", rb.getStringJS("third string"));
}

function testResBundleGetStringJSUndefinedSource() {
    var rb = new ResBundle(); // default locale
    
    assertNotNull(rb);
    
    assertUndefined(rb.getStringJS(undefined));
}

function testResBundleGetStringEmpty() {
    var rb = new ResBundle(); // default locale
    
    assertNotNull(rb);
    
    assertEquals("", rb.getString("").toString());
}

function testResBundleGetStringUndefined() {
    var rb = new ResBundle(); // default locale
    
    assertNotNull(rb);
    
    assertEquals("", rb.getString(undefined).toString());
}

function testResBundleGetStringde() {
    var rb = new ResBundle({locale: "de"});
    
    assertNotNull(rb);
    
    assertEquals("erste String", rb.getString("first string").toString());
    assertEquals("zweite String", rb.getString("second string").toString());
    assertEquals("dritte String", rb.getString("third string").toString());
}

function testResBundleGetStringfr() {
    var rb = new ResBundle({locale: "fr"});
    
    assertNotNull(rb);
    
    assertEquals("première chaîne", rb.getString("first string").toString());
    assertEquals("deuxième chaîne", rb.getString("second string").toString());
    assertEquals("troisième chaîne", rb.getString("third string").toString());
}

function testResBundleGetStringfrCA() {
    var rb = new ResBundle({locale: "fr-CA"});
    
    assertNotNull(rb);
    
    assertEquals("première collier", rb.getString("first string").toString());
    assertEquals("deuxième collier", rb.getString("second string").toString());
    assertEquals("troisième chaîne", rb.getString("third string").toString());
}

function testResBundleGetStringfrCAgovt() {
    var rb = new ResBundle({locale: "fr-CA-govt"});
    
    assertNotNull(rb);
    
    assertEquals("première corde", rb.getString("first string").toString());
    assertEquals("deuxième collier", rb.getString("second string").toString());
    assertEquals("troisième corde", rb.getString("third string").toString());
}

function testResBundleGetStringDefaultToParent() {
    var rb = new ResBundle({locale: "de-DE"});
    
    assertNotNull(rb);
    
    assertEquals("erste String", rb.getString("first string").toString());
    assertEquals("zweite String", rb.getString("second string").toString());
    assertEquals("dritte String", rb.getString("third string").toString());
}

function testResBundleGetStringDefaultToSource() {
    var rb = new ResBundle({locale: "ja-JP"});
    
    assertNotNull(rb);
    
    assertEquals("first string x", rb.getString("first string x").toString());
    assertEquals("second string x", rb.getString("second string x").toString());
    assertEquals("third string x", rb.getString("third string x").toString());
}

function testResBundleGetStringJSDefaultToSource() {
    var rb = new ResBundle({locale: "ja-JP"});
    
    assertNotNull(rb);
    
    assertEquals("first string x", rb.getStringJS("first string x"));
    assertEquals("second string x", rb.getStringJS("second string x"));
    assertEquals("third string x", rb.getStringJS("third string x"));
}

function testResBundleGetStringOtherBundle() {
    var rb = new ResBundle({name: "tester"});
    
    assertNotNull(rb);
    
    assertEquals("Hello from {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Hello from {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Greetings from {city} in {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundleesES() {
    var rb = new ResBundle({
        name: "tester",
        locale: "es-ES"
    });
    
    assertNotNull(rb);
    
    assertEquals("Saludos desde {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Saludos desde {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Saludos desde {city} en {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundleesMX() {
    var rb = new ResBundle({
        name: "tester",
        locale: "es-MX"
    });
    
    assertNotNull(rb);
    
    assertEquals("Hola de {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Saludos desde {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Hola de {city} en {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundleesMXslang() {
    var rb = new ResBundle({
        name: "tester",
        locale: "es-MX-slang"
    });
    
    assertNotNull(rb);
    
    assertEquals("Que tal de {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Que tal de {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Hola de {city} en {country}", rb.getString("Greetings from {city} in {country}").toString());
}


function testResBundleGetStringOtherBundlePsuedoRaw() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "raw"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {çõüñţŕÿ}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {çíţÿ}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {çíţÿ} íñ {çõüñţŕÿ}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoText() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoHtml() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoHtmlWithTags() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm <span class=\"foo\">{country}</span>", rb.getString("Hello from <span class=\"foo\">{country}</span>").toString());
    assertEquals("Ħëľľõ fŕõm <span class=\"foo\">{city}</span>", rb.getString("Hello from <span class=\"foo\">{city}</span>").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm <span class=\"foo\">{city}</span> íñ <span class=\"foo\">{country}</span>", rb.getString("Greetings from <span class=\"foo\">{city}</span> in <span class=\"foo\">{country}</span>").toString());
}

function testResBundleGetStringOtherBundlePsuedoHtmlWithMultipleTags() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm <div><span class=\"foo\">{country}</span></div>", rb.getString("Hello from <div><span class=\"foo\">{country}</span></div>").toString());
    assertEquals("Ħëľľõ fŕõm <div><span class=\"foo\">{city}</span></div>", rb.getString("Hello from <div><span class=\"foo\">{city}</span></div>").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm <div><span class=\"foo\">{city}</span></div> íñ <div><span class=\"foo\">{country}</span></div>", rb.getString("Greetings from <div><span class=\"foo\">{city}</span></div> in <div><span class=\"foo\">{country}</span></div>").toString());
}

function testResBundleGetStringOtherBundlePsuedoHtmlWithTagsAndEntities() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm &amp;<span class=\"foo\">{country}</span>&mdash;", rb.getString("Hello from &amp;<span class=\"foo\">{country}</span>&mdash;").toString());
    assertEquals("Ħëľľõ fŕõm &amp;<span class=\"foo\">{city}</span>&mdash;", rb.getString("Hello from &amp;<span class=\"foo\">{city}</span>&mdash;").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm &amp;<span class=\"foo\">{city}</span>&mdash; íñ &amp;<span class=\"foo\">{country}</span>&mdash;", rb.getString("Greetings from &amp;<span class=\"foo\">{city}</span>&mdash; in &amp;<span class=\"foo\">{country}</span>&mdash;").toString());
}

function testResBundleGetStringOtherBundlePsuedoXml() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringOtherBundlePsuedoC() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "c",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the C style replacement parameters
	assertEquals("àçţüàľ %s 43210", rb.getStringJS("actual %s "));
	assertEquals("àçţüàľ %b 43210", rb.getStringJS("actual %b "));
	assertEquals("àçţüàľ %h 43210", rb.getStringJS("actual %h "));
	assertEquals("àçţüàľ %c 43210", rb.getStringJS("actual %c "));
	assertEquals("àçţüàľ %d 43210", rb.getStringJS("actual %d "));
	assertEquals("àçţüàľ %o 43210", rb.getStringJS("actual %o "));
	assertEquals("àçţüàľ %x 43210", rb.getStringJS("actual %x "));
	assertEquals("àçţüàľ %e 43210", rb.getStringJS("actual %e "));
	assertEquals("àçţüàľ %f 43210", rb.getStringJS("actual %f "));
	assertEquals("àçţüàľ %g 43210", rb.getStringJS("actual %g "));
	assertEquals("àçţüàľ %a 43210", rb.getStringJS("actual %a "));
	assertEquals("àçţüàľ %t 43210", rb.getStringJS("actual %t "));
	assertEquals("àçţüàľ %% 43210", rb.getStringJS("actual %% "));
	assertEquals("àçţüàľ %n 43210", rb.getStringJS("actual %n "));
	
	assertEquals("àçţüàľ %S 43210", rb.getStringJS("actual %S "));
	assertEquals("àçţüàľ %B 43210", rb.getStringJS("actual %B "));
	assertEquals("àçţüàľ %H 43210", rb.getStringJS("actual %H "));
	assertEquals("àçţüàľ %C 43210", rb.getStringJS("actual %C "));
	assertEquals("àçţüàľ %X 43210", rb.getStringJS("actual %X "));
	assertEquals("àçţüàľ %E 43210", rb.getStringJS("actual %E "));
	assertEquals("àçţüàľ %G 43210", rb.getStringJS("actual %G "));
	assertEquals("àçţüàľ %A 43210", rb.getStringJS("actual %A "));
	assertEquals("àçţüàľ %T 43210", rb.getStringJS("actual %T "));
	assertEquals("àçţüàľ %% 43210", rb.getStringJS("actual %% "));
	
	assertEquals("àçţüàľ %2$s 543210", rb.getStringJS("actual %2$s "));
	assertEquals("àçţüàľ %-d 543210", rb.getStringJS("actual %-d "));
	assertEquals("àçţüàľ %#d 543210", rb.getStringJS("actual %#d "));
	assertEquals("àçţüàľ %+d 543210", rb.getStringJS("actual %+d "));
	assertEquals("àçţüàľ % d 543210", rb.getStringJS("actual % d "));
	assertEquals("àçţüàľ %02d 543210", rb.getStringJS("actual %02d "));
	assertEquals("àçţüàľ %.2d 543210", rb.getStringJS("actual %.2d "));
	assertEquals("àçţüàľ %(2d 543210", rb.getStringJS("actual %(2d "));
	assertEquals("àçţüàľ %4$-2.2d 76543210", rb.getStringJS("actual %4$-2.2d "));
	
	assertEquals("àçţüàľ %Ň 43210", rb.getStringJS("actual %N "));
	assertEquals("àçţüàľ %F 43210", rb.getStringJS("actual %F "));
	assertEquals("àçţüàľ %Ð 43210", rb.getStringJS("actual %D "));
	assertEquals("àçţüàľ %Ø 43210", rb.getStringJS("actual %O "));
}

function testResBundleGetStringOtherBundlePsuedoDefault() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX"
    });
    
    assertNotNull(rb);
    
    // should be equivalent to "text" and not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringMissingBundlePsuedoHtml() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should still pseudo-translate, despite having no translations
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringPsuedoHtmlLengthenShort() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "html",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 50%
    assertEquals("Ħëľľõ fŕõm Pàŕíš76543210", rb.getString("Hello from Paris").toString());
}

function testResBundleGetStringPsuedoHtmlLengthenMedium() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "html",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 33%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf ľíğĥţš09876543210", rb.getString("Hello from Paris, city of lights").toString());
}

function testResBundleGetStringPsuedoHtmlLengthenLong() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "html",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 20%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf çüľţüŕë, ľíğĥţš, àñð šüþëŕb çüíšíñë.109876543210", rb.getString("Hello from Paris, city of culture, lights, and superb cuisine.").toString());
}

function testResBundleGetStringPsuedoLeaveHTMLTags() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <a href='url'>{city}</a>", rb.getString("Hello from <a href='url'>{city}</a>").toString());
}

function testResBundleGetStringPsuedoLeaveHTMLTags2() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    assertEquals('<span class="n_letter">ñ</span>Çľüšţëŕ: <strong>{clusterName}</strong>', rb.getString('<span class="n_letter">n</span>Cluster: <strong>{clusterName}</strong>').toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLTagsRaw() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "raw"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <à ĥŕëf='üŕľ'>{çíţÿ}</à>", rb.getString("Hello from <a href='url'>{city}</a>").toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLTagsText() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <à ĥŕëf='üŕľ'>{city}</à>", rb.getString("Hello from <a href='url'>{city}</a>").toString());
}

function testResBundleGetStringPsuedoLeaveHTMLEntities() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {city} &amp; {country}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLEntitiesRaw() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "raw"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {çíţÿ} &àmþ; {çõüñţŕÿ}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringPsuedoNotLeaveHTMLEntitiesText() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {city} &àmþ; {country}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringMissingBundlePsuedoXml() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    // should still pseudo-translate, despite having no translations
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringPsuedoXmlLengthenShort() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "xml",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 50%
    assertEquals("Ħëľľõ fŕõm Pàŕíš76543210", rb.getString("Hello from Paris").toString());
}

function testResBundleGetStringPsuedoXmlLengthenMedium() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "xml",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 33%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf ľíğĥţš09876543210", rb.getString("Hello from Paris, city of lights").toString());
}

function testResBundleGetStringPsuedoXmlLengthenLong() {
    var rb = new ResBundle({
        name: "asdfasdffoobar",
        locale: "zxx-XX",
        type: "xml",
        lengthen: true
    });
    
    assertNotNull(rb);
    
    // short: increase by 20%
    assertEquals("Ħëľľõ fŕõm Pàŕíš, çíţÿ õf çüľţüŕë, ľíğĥţš, àñð šüþëŕb çüíšíñë.109876543210", rb.getString("Hello from Paris, city of culture, lights, and superb cuisine.").toString());
}

function testResBundleGetStringPsuedoLeaveXmlTags() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm <city type='large'>{city}</city>", rb.getString("Hello from <city type='large'>{city}</city>").toString());
}

function testResBundleGetStringPsuedoLeaveXmlEntities() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    assertEquals("Ħëľľõ fŕõm {city} &amp; {country}", rb.getString("Hello from {city} &amp; {country}").toString());
}

function testResBundleGetStringWithKeyNamees() {
    var rb = new ResBundle({
        name: "tester",
        locale: "es"
    });
    
    assertNotNull(rb);
    
    assertEquals("Saludos desde {user}.", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNameesMX() {
    var rb = new ResBundle({
        name: "tester",
        locale: "es-MX"
    });
    
    assertNotNull(rb);
    
    assertEquals("Saludos desde {user}.", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNameesMXslang() {
    var rb = new ResBundle({
        name: "tester",
        locale: "es-MX-slang"
    });
    
    assertNotNull(rb);
    
    assertEquals("Buenas desde {user}.", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNamedeDE() {
    var rb = new ResBundle({
        name: "tester",
        locale: "de-DE"
    });
    
    assertNotNull(rb);
    
    assertEquals("Grüße vom {user}", rb.getString("Hello from {user}.", "key1").toString());
}

function testResBundleGetStringWithKeyNameUnknown() {
    var rb = new ResBundle({
        name: "tester",
        locale: "de-DE"
    });
    
    assertNotNull(rb);
    
    assertEquals("Hello from {user}.", rb.getString("Hello from {user}.", "key3").toString());
}

function testResBundleGetStringRightLocale() {
    var rb = new ResBundle({
        locale: "de-DE"
    });
    
    assertNotNull(rb);
    
    var str = rb.getString("first string");
    assertEquals("erste String", str.toString());
    assertEquals("de-DE", str.getLocale());
}

function testResBundleGetResObj() {
    var rb = new ResBundle({locale: "fr"});
    
    assertNotNull(rb);
    
    var obj = rb.getResObj();
    
    assertEquals("première chaîne", obj["first string"]);
    assertEquals("deuxième chaîne", obj["second string"]);
    assertEquals("troisième chaîne", obj["third string"]);
}

function testResBundleGetResObjMerge() {
    var rb = new ResBundle({locale: "fr-CA"});
    
    assertNotNull(rb);
    
    var obj = rb.getResObj();
    
    assertEquals("première collier", obj["first string"]);
    assertEquals("deuxième collier", obj["second string"]);
    assertEquals("troisième chaîne", obj["third string"]);
}

function testResBundleGetStringAcceptEmptyTranslations() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals("", rb.getString("empty").toString());
}

function testResBundleGetStringNonExistantTranslations() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    // should return source
    assertEquals("foobar", rb.getString("foobar").toString());
}

function testResBundleGetStringAcceptSpaceTranslations() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(" ", rb.getString("space").toString());
}

function testResBundleGetStringAcceptCommaTranslations() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(",", rb.getString("comma").toString());
}

function testResBundleGetStringAcceptEmptyTranslationsWithKey() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals("", rb.getString("asdf", "empty").toString());
}

function testResBundleGetStringAcceptNonExistantTranslationsWithKey() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    // should return source
    assertEquals("asdf", rb.getString("asdf", "foobar").toString());
}

function testResBundleGetStringAcceptSpaceTranslationsWithKey() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(" ", rb.getString("asdf", "space").toString());
}

function testResBundleGetStringAcceptCommaTranslationsWithKey() {
    var rb = new ResBundle({
    	name: "tester",
    	locale: "zh-CN"
    });
    
    assertNotNull(rb);
    
    assertEquals(",", rb.getString("asdf", "comma").toString());
}

function testResBundleGetStringNoResourcesReturnSource() {
   var rb = new ResBundle({
     name: "tester",
     locale: "zz-ZZ"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a test.", rb.getString("This is a test.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceHtmlTypeHtml() {
   var rb = new ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a <b>test</b>. A&amp;P.", rb.getString("This is a <b>test</b>. A&amp;P.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceHtmlTypejs() {
   var rb = new ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "js"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a <b>test</b>. A&amp;P.", rb.getString("This is a <b>test</b>. A&amp;P.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypejsNoEscape() {
   var rb = new ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "js"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a 'test'.", rb.getString("This is a 'test'.").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypejsWithEscape() {
   var rb = new ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "js"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a \\'test\\'.", rb.getString("This is a 'test'.", undefined, "js").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypeHtmlWithEscape() {
   var rb = new ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is a &lt;b&gt;test&lt;/b&gt;. A&amp;amp;P.", rb.getString("This is a <b>test</b>. A&amp;P.", undefined, "html").toString());
}

function testResBundleGetStringNoResourcesReturnSourceTypeHtmlWithEscapeJS() {
   var rb = new ResBundle({
     name: "tester",
     locale: "zz-ZZ",
     type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("This is <a href=\\\"a test\\\">a \\'test\\'</a>.", rb.getString("This is <a href=\"a test\">a 'test'</a>.", undefined, "js").toString());
}

function testResBundleGetStringPsuedoHtmlNoEscape() {
   var rb = new ResBundle({
       name: "asdfasdffoobar",
       locale: "zxx-XX",
       type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("Ħëľľõ fŕõm <a href=\"asdf\">Pàŕíš</a>, çíţÿ õf ľíğĥţš.", rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.").toString());
}

function testResBundleGetStringPsuedoHtmlEscapeHtml() {
   var rb = new ResBundle({
       name: "asdfasdffoobar",
       locale: "zxx-XX",
       type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("Ħëľľõ fŕõm &lt;a href=\"asdf\"&gt;Pàŕíš&lt;/a&gt;, çíţÿ õf ľíğĥţš.", rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.", undefined, "html").toString());
}

function testResBundleGetStringPsuedoHtmlEscapeJS() {
   var rb = new ResBundle({
       name: "asdfasdffoobar",
       locale: "zxx-XX",
       type: "html"
   });
   
   assertNotNull(rb);
   
   assertEquals("Ħëľľõ fŕõm <a href=\\\"asdf\\\">Pàŕíš</a>, çíţÿ õf ľíğĥţš.", rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.", undefined, "js").toString());
}

function testResBundleContainsKeyByKeyTrue() {
   var rb = new ResBundle({
       name: "strings",
       locale: "de-DE"
   });
   
   assertNotNull(rb);
   
   assertTrue(rb.containsKey(undefined, "first string"));
}

function testResBundleContainsKeyByKeyFalse() {
   var rb = new ResBundle({
       name: "strings",
       locale: "de-DE"
   });
   
   assertNotNull(rb);
   
   assertFalse(rb.containsKey(undefined, "asdfasdf"));
}

function testResBundleContainsKeyBySourceTrue() {
   var rb = new ResBundle({
       name: "strings",
       locale: "de-DE"
   });
   
   assertNotNull(rb);
   
   assertTrue(rb.containsKey("first string"));
}

function testResBundleContainsKeyBySourceFalse() {
   var rb = new ResBundle({
       name: "strings",
       locale: "de-DE"
   });
   
   assertNotNull(rb);
   
   assertFalse(rb.containsKey("asdfasdf"));
}

function testResBundleContainsKeyBySourceMakeKey() {
   var rb = new ResBundle({
       name: "strings",
       locale: "de-DE"
   });
   
   assertNotNull(rb);
   
   assertTrue(rb.containsKey("first   \t\t\r\n  string"));
}

function testResBundleContainsKeyBothUndefined() {
   var rb = new ResBundle({
       name: "strings",
       locale: "de-DE"
   });
   
   assertNotNull(rb);
   
   assertFalse(rb.containsKey(undefined, undefined));
}

function testResBundleConstructAsynchPreassembled() {
	var onloadcalled = false;
	ResBundle.resources = undefined;
    var rb = new ResBundle({
    	locale: "fr-CA-govt",
    	sync: false,
    	onLoad: function(rb) {
    		assertNotUndefined(rb);
    		
    	    assertEquals("première corde", rb.getString("first string").toString());
    	    assertEquals("deuxième collier", rb.getString("second string").toString());
    	    assertEquals("troisième corde", rb.getString("third string").toString());
    	    
    	    onloadcalled = true;
    	}
    });
    
    assertNotUndefined(rb);
    assertTrue(onloadcalled);
}

function testResBundleConstructAsynchPreassembledCached() {
	var onloadcalled = false;
    var rb = new ResBundle({
    	locale: "fr-CA-govt",
    	sync: false,
    	onLoad: function(rb) {
    		assertNotUndefined(rb);
    		
    	    assertEquals("première corde", rb.getString("first string").toString());
    	    assertEquals("deuxième collier", rb.getString("second string").toString());
    	    assertEquals("troisième corde", rb.getString("third string").toString());
    	    
    	    onloadcalled = true;
    	}
    });
    
    assertNotUndefined(rb);
    assertTrue(onloadcalled);
}

function testResBundleConstructAsynchDynamic() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var onloadcalled = false;
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
    var rb = new ResBundle({
    	locale: "de-DE-SAP",
    	name: "foobar",
    	sync: false,
    	onLoad: function(rb) {
    		assertNotUndefined(rb);
    		
    	    assertEquals("erste String", rb.getString("first string").toString());
    	    assertEquals("zweite String", rb.getString("second string").toString());
    	    assertEquals("dritte String", rb.getString("third string").toString());
    	    
    	    onloadcalled = true;
    	}
    });
    
    ilib.setLoaderCallback(oldLoader);
    assertNotUndefined(rb);
    assertTrue(onloadcalled);
}

function testResBundleConstructSynchDynamic() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
    var rb = new ResBundle({
    	locale: "de-DE-SAP",
    	name: "foobar"
    });
    
	assertNotUndefined(rb);
	
    ilib.setLoaderCallback(oldLoader);

    assertEquals("erste String", rb.getString("first string").toString());
    assertEquals("zweite String", rb.getString("second string").toString());
    assertEquals("dritte String", rb.getString("third string").toString());
}

function testResBundleConstructAsynchDynamicDefaultName() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var onloadcalled = false;
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
    var rb = new ResBundle({
    	locale: "fr-CA-govt",
    	sync: false,
    	onLoad: function(rb) {
    	    ilib.setLoaderCallback(oldLoader);
    		assertNotUndefined(rb);
    		
    	    assertEquals("première corde", rb.getString("first string").toString());
    	    assertEquals("deuxième collier", rb.getString("second string").toString());
    	    assertEquals("troisième corde", rb.getString("third string").toString());
    	}
    });
}

function testResBundleConstructSynchDynamicDefaultName() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
    var rb = new ResBundle({
    	locale: "fr-CA-govt"
    });
    
	assertNotUndefined(rb);
	
    ilib.setLoaderCallback(oldLoader);

    assertEquals("première corde", rb.getString("first string").toString());
    assertEquals("deuxième collier", rb.getString("second string").toString());
    assertEquals("troisième corde", rb.getString("third string").toString());
}

function testResBundleConstructAsynchDynamicNoStrings() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
    var rb = new ResBundle({
    	locale: "de-DE-SAP",
    	name: "asdf", // doesn't exist
    	sync: false,
    	onLoad: function(rb) {
    		assertNotUndefined(rb);
    		ilib.setLoaderCallback(oldLoader);

    	    assertEquals("first string", rb.getString("first string").toString());
    	    assertEquals("second string", rb.getString("second string").toString());
    	    assertEquals("third string", rb.getString("third string").toString());
    	    
    	    onloadcalled = true;
    	}
    });
}

function testResBundleConstructSynchDynamicNoStrings() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
    var rb = new ResBundle({
    	locale: "de-DE-SAP",
    	name: "asdf" // doesn't exist
    });
    
	assertNotUndefined(rb);

	ilib.setLoaderCallback(oldLoader);
	
    assertEquals("first string", rb.getString("first string").toString());
    assertEquals("second string", rb.getString("second string").toString());
    assertEquals("third string", rb.getString("third string").toString());
}


function testResBundleGetStringCyrlPsuedoRaw() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-Cyrl-XX",
        type: "raw"
    });
    
    assertNotNull(rb);
    
    // should pseudo-ize the replacement parameter names
    assertEquals("Хэлло фром {чоунтря}", rb.getString("Hello from {country}").toString());
    assertEquals("Хэлло фром {читя}", rb.getString("Hello from {city}").toString());
    assertEquals("Грээтингс фром {читя} ин {чоунтря}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringCyrlPsuedoText() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-Cyrl-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Хэлло фром {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Хэлло фром {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Грээтингс фром {city} ин {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringCyrlPsuedoHtml() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-Cyrl-XX",
        type: "html"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Хэлло фром {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Хэлло фром {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Грээтингс фром {city} ин {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringCyrlPsuedoXml() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-Cyrl-XX",
        type: "xml"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Хэлло фром {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Хэлло фром {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Грээтингс фром {city} ин {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringCyrlPsuedoDefault() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-Cyrl-XX"
    });
    
    assertNotNull(rb);
    
    // should be equivalent to "text" and not pseudo-ize the replacement parameter names
    assertEquals("Хэлло фром {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Хэлло фром {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Грээтингс фром {city} ин {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringHansPsuedoText() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-Hans-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    // for Chinese scripts, remove the spaces to the simulate Chinese writing style
    assertEquals("和俄了了夥凡熱夥们{country}", rb.getString("Hello from {country}").toString());
    assertEquals("和俄了了夥凡熱夥们{city}", rb.getString("Hello from {city}").toString());
    assertEquals("个熱俄俄推意尼个思凡熱夥们{city}意尼{country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringHebrPsuedoText() {
    var rb = new ResBundle({
        name: "tester",
        locale: "zxx-Hebr-XX",
        type: "text"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("הֶללֹ פרֹמ {country}", rb.getString("Hello from {country}").toString());
    assertEquals("הֶללֹ פרֹמ {city}", rb.getString("Hello from {city}").toString());
    assertEquals("גרֶֶטִנגס פרֹמ {city} ִנ {country}", rb.getString("Greetings from {city} in {country}").toString());
}


function testResBundleGetStringMissingWrongValue() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        missing: "foo"
    });
    
    assertNotNull(rb);
    
    assertEquals("source", rb.missing);
}

function testResBundleGetStringMissingRightValue1() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        missing: "pseudo"
    });
    
    assertNotNull(rb);
    
    assertEquals("pseudo", rb.missing);
}

function testResBundleGetStringMissingRightValue2() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        missing: "source"
    });
    
    assertNotNull(rb);
    
    assertEquals("source", rb.missing);
}

function testResBundleGetStringMissingRightValue3() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        missing: "empty"
    });
    
    assertNotNull(rb);
    
    assertEquals("empty", rb.missing);
}

function testResBundleGetStringCyrlMissingRawSource() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        type: "raw",
        missing: "source"
    });
    
    assertNotNull(rb);
    
    assertEquals("Hello from {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Hello from {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Greetings from {city} in {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringCyrlMissingRawPseudo() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        type: "raw",
        missing: "pseudo"
    });
    
    assertNotNull(rb);
    
    assertEquals("Хэлло фром {чоунтря}", rb.getString("Hello from {country}").toString());
    assertEquals("Хэлло фром {читя}", rb.getString("Hello from {city}").toString());
    assertEquals("Грээтингс фром {читя} ин {чоунтря}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringCyrlMissingRawEmpty() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        type: "raw",
        missing: "empty"
    });
    
    assertNotNull(rb);
    
    assertEquals("", rb.getString("Hello from {country}").toString());
    assertEquals("", rb.getString("Hello from {city}").toString());
    assertEquals("", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringLatnMissingPsuedo() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "de-DE",
        missing: "pseudo"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Ħëľľõ fŕõm {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Ħëľľõ fŕõm {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Ĝŕëëţíñğš fŕõm {city} íñ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringCyrlMissingPsuedo() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "ru-RU",
        missing: "pseudo"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("Хэлло фром {country}", rb.getString("Hello from {country}").toString());
    assertEquals("Хэлло фром {city}", rb.getString("Hello from {city}").toString());
    assertEquals("Грээтингс фром {city} ин {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringHebrMissingPsuedo() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "he-IL",
        missing: "pseudo"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    assertEquals("הֶללֹ פרֹמ {country}", rb.getString("Hello from {country}").toString());
    assertEquals("הֶללֹ פרֹמ {city}", rb.getString("Hello from {city}").toString());
    assertEquals("גרֶֶטִנגס פרֹמ {city} ִנ {country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringHansMissingPsuedo() {
    var rb = new ResBundle({
        name: "tester2",
        locale: "zh-Hans-CN",
        missing: "pseudo"
    });
    
    assertNotNull(rb);
    
    // should not pseudo-ize the replacement parameter names
    // for Chinese scripts, remove the spaces to the simulate Chinese writing style
    assertEquals("和俄了了夥凡熱夥们{country}", rb.getString("Hello from {country}").toString());
    assertEquals("和俄了了夥凡熱夥们{city}", rb.getString("Hello from {city}").toString());
    assertEquals("个熱俄俄推意尼个思凡熱夥们{city}意尼{country}", rb.getString("Greetings from {city} in {country}").toString());
}

function testResBundleGetStringWithSpaces() {
    var rb = new ResBundle({
        name: "tester2"
    });
    
    assertNotNull(rb);
    
    assertEquals("test1", rb.getString(" This is a test. ").toString());
}

function testResBundleGetStringCompressSpaces() {
    var rb = new ResBundle({
        name: "tester2"
    });
    
    assertNotNull(rb);
    
    assertEquals("test1", rb.getString("    This    is     a     test.     ").toString());
}

function testResBundleGetStringConvertAllWhiteToSpaces() {
    var rb = new ResBundle({
        name: "tester2"
    });
    
    assertNotNull(rb);
    
    assertEquals("test1", rb.getString(" \t\r   This \n\n   is \n\t    a    \t test.  \n   ").toString());
}

function testResBundleGetStringCompressSpacesEnd() {
    var rb = new ResBundle({
        name: "tester2"
    });
    
    assertNotNull(rb);
    
    assertEquals("test2", rb.getString("This    is     a     test.     ").toString());
}

function testResBundleGetStringCompressSpacesBeginning() {
    var rb = new ResBundle({
        name: "tester2"
    });
    
    assertNotNull(rb);
    
    assertEquals("test3", rb.getString("     This    is     a     test.").toString());
}

function testResBundlePseudo_euES() {
	ilib.clearPseudoLocales();
    ilib.setAsPseudoLocale("eu-ES");
    var rb = new ResBundle({
    	locale:'eu-ES'
    });
    assertEquals("Ťĥíš íš þšüëðõ šţŕíñğ ţëšţ", rb.getString("This is psuedo string test").toString());
    ilib.clearPseudoLocales();
}

function testResBundlePseudo_psAF() {
	ilib.clearPseudoLocales();
	ilib.setAsPseudoLocale("ps-AF");
    var rb = new ResBundle({
    	locale:'ps-AF'
    });
    assertEquals("טהִס ִס פסֶֻדֹ סטרִנג טֶסט", rb.getString("This is psuedo string test").toString());
    ilib.clearPseudoLocales();
}

function testResBundlePseudo_deDE() {
	ilib.clearPseudoLocales();
    ilib.setAsPseudoLocale("de-DE");
    var rb = new ResBundle({
    	locale:'de-DE'
    });
    assertEquals("Ťĥíš íš þšüëðõ šţŕíñğ ţëšţ", rb.getString("This is psuedo string test").toString());
    ilib.clearPseudoLocales();
}

function testResBundlePseudoReallyThere() {
	ilib.clearPseudoLocales();
	assertEquals(-1, ilib.pseudoLocales.indexOf("de-DE"));
    ilib.setAsPseudoLocale("de-DE");
    assertEquals(4, ilib.pseudoLocales.indexOf("de-DE"));
    ilib.clearPseudoLocales();
}

function testResBundlePseudoIsPseudo() {
	var loc = new Locale("de-DE");
	ilib.clearPseudoLocales();
	assertFalse(loc.isPseudo());
    ilib.setAsPseudoLocale("de-DE");
    assertTrue(loc.isPseudo());
    ilib.clearPseudoLocales();
}

function testResBundlePsuedo_EMPTY() {
	ilib.clearPseudoLocales();
    ilib.setAsPseudoLocale("");
    var rb = new ResBundle({
    	locale:""
    });
    assertEquals("This is psuedo string test", rb.getString("This is psuedo string test").toString());
    ilib.clearPseudoLocales();
}

function testResBundlePsuedoEmptyNothingAdded() {
	ilib.clearPseudoLocales();
	assertEquals(4, ilib.pseudoLocales.length);
    ilib.setAsPseudoLocale("");
    assertEquals(4, ilib.pseudoLocales.length);
    ilib.clearPseudoLocales();
}

function testResBundlePsuedoUndefinedNothingAdded() {
	ilib.clearPseudoLocales();
	assertEquals(4, ilib.pseudoLocales.length);
    ilib.setAsPseudoLocale();
    assertEquals(4, ilib.pseudoLocales.length);
    
    ilib.clearPseudoLocales();
}

function testClearPseudoLocalesOldOnesGone() {
	var loc = new Locale("de-DE");
	ilib.setAsPseudoLocale("de-DE");
	assertTrue(loc.isPseudo());
	
    ilib.clearPseudoLocales();
    
    assertFalse(loc.isPseudo());
}

function testClearResetToDefaults() {
    ilib.clearPseudoLocales();

	var loc = new Locale("zxx-XX");
    assertTrue(loc.isPseudo());
    
    loc = new Locale("zxx-Hans-XX");
    assertTrue(loc.isPseudo());
    loc = new Locale("zxx-Cyrl-XX");
    assertTrue(loc.isPseudo());
    loc = new Locale("zxx-Hebr-XX");
    assertTrue(loc.isPseudo());
}

function testResBundleWithDefaultLocaleBeingPseudo() {
	ilib.clearPseudoLocales();
	var tmp = ilib.getLocale();
	
	ilib.setLocale("zxx-XX"); // pseudo-locale
	
	// this used to throw an exception:
	var rb = new ResBundle();
	
	assertEquals("ţŕàñšľàţíõñ", rb.getStringJS("translation"));
	
	ilib.setLocale(tmp);
}