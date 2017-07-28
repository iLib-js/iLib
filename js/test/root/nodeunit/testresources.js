/*
 * testresources.js - test the Resources object
 * 
 * Copyright © 2012-2015,2017, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib-node.js");
}
if (typeof(ResBundle) === "undefined") {
    var ResBundle = require("../.././../lib/ResBundle.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../.././../lib/Locale.js");
}

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

function mockLoaderRes(paths, sync, params, callback) {
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


if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

var oldLoader = ilib._load;

module.exports.testresources = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    
    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testResBundleConstructorEmpty: function(test) {
        test.expect(1);
        ilib.clearPseudoLocales();
        
        var rb = new ResBundle();
        
        test.ok(rb !== null);
        test.done();
    },
    
    testResBundleConstructorDefaultName: function(test) {
        test.expect(2);
        var rb = new ResBundle();
        
        test.ok(rb !== null);
        
        test.equal(rb.getName(), "strings");
        test.done();
    },
    
    testResBundleConstructorDefaultLocale: function(test) {
        test.expect(2);
        var rb = new ResBundle();
        
        test.ok(rb !== null);
        
        var loc = rb.getLocale();
        
        test.equal(loc.toString(), "en-US");
        test.done();
    },
    
    testResBundleConstructorOtherLocale: function(test) {
        test.expect(2);
        var rb = new ResBundle({locale: "de-DE"});
        
        test.ok(rb !== null);
        
        var loc = rb.getLocale();
        
        test.equal(loc.toString(), "de-DE");
        test.done();
    },
    
    testResBundleConstructorOtherName: function(test) {
        test.expect(2);
        var rb = new ResBundle({name: "tester"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getName(), "tester");
        test.done();
    },
    
    testResBundleGetString: function(test) {
        test.expect(4);
        var rb = new ResBundle(); // default locale
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("first string").toString(), "first");
        test.equal(rb.getString("second string").toString(), "second");
        test.equal(rb.getString("third string").toString(), "third");
        test.done();
    },
    
    testResBundleGetStringJS: function(test) {
        test.expect(4);
        var rb = new ResBundle(); // default locale
        
        test.ok(rb !== null);
        
        test.equal(rb.getStringJS("first string"), "first");
        test.equal(rb.getStringJS("second string"), "second");
        test.equal(rb.getStringJS("third string"), "third");
        test.done();
    },
    
    testResBundleGetStringJSUndefinedSource: function(test) {
        test.expect(2);
        var rb = new ResBundle(); // default locale
        
        test.ok(rb !== null);
        
        test.ok(typeof(rb.getStringJS(undefined)) === "undefined");
        test.done();
    },
    
    testResBundleGetStringEmpty: function(test) {
        test.expect(2);
        var rb = new ResBundle(); // default locale
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("").toString(), "");
        test.done();
    },
    
    testResBundleGetStringUndefined: function(test) {
        test.expect(2);
        var rb = new ResBundle(); // default locale
        
        test.ok(rb !== null);
        
        test.equal(rb.getString(undefined).toString(), "");
        test.done();
    },
    
    testResBundleGetStringde: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "de"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("first string").toString(), "erste String");
        test.equal(rb.getString("second string").toString(), "zweite String");
        test.equal(rb.getString("third string").toString(), "dritte String");
        test.done();
    },
    
    testResBundleGetStringfr: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "fr"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("first string").toString(), "première chaîne");
        test.equal(rb.getString("second string").toString(), "deuxième chaîne");
        test.equal(rb.getString("third string").toString(), "troisième chaîne");
        test.done();
    },
    
    testResBundleGetStringfrCA: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "fr-CA"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("first string").toString(), "première collier");
        test.equal(rb.getString("second string").toString(), "deuxième collier");
        test.equal(rb.getString("third string").toString(), "troisième chaîne");
        test.done();
    },
    
    testResBundleGetStringfrCAgovt: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "fr-CA-govt"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("first string").toString(), "première corde");
        test.equal(rb.getString("second string").toString(), "deuxième collier");
        test.equal(rb.getString("third string").toString(), "troisième corde");
        test.done();
    },
    
    testResBundleGetStringDefaultToParent: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "de-DE"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("first string").toString(), "erste String");
        test.equal(rb.getString("second string").toString(), "zweite String");
        test.equal(rb.getString("third string").toString(), "dritte String");
        test.done();
    },
    
    testResBundleGetStringDefaultToSource: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "ja-JP"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("first string x").toString(), "first string x");
        test.equal(rb.getString("second string x").toString(), "second string x");
        test.equal(rb.getString("third string x").toString(), "third string x");
        test.done();
    },
    
    testResBundleGetStringJSDefaultToSource: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "ja-JP"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getStringJS("first string x"), "first string x");
        test.equal(rb.getStringJS("second string x"), "second string x");
        test.equal(rb.getStringJS("third string x"), "third string x");
        test.done();
    },
    
    testResBundleGetStringOtherBundle: function(test) {
        test.expect(4);
        var rb = new ResBundle({name: "tester"});
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {country}").toString(), "Hello from {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Hello from {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Greetings from {city} in {country}");
        test.done();
    },
    
    testResBundleGetStringOtherBundleesES: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "es-ES"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {country}").toString(), "Saludos desde {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Saludos desde {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Saludos desde {city} en {country}");
        test.done();
    },
    
    testResBundleGetStringOtherBundleesMX: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "es-MX"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {country}").toString(), "Hola de {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Saludos desde {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Hola de {city} en {country}");
        test.done();
    },
    
    testResBundleGetStringOtherBundleesMXslang: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "es-MX-slang"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {country}").toString(), "Que tal de {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Que tal de {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Hola de {city} en {country}");
        test.done();
    },
    
    
    testResBundleGetStringOtherBundlePsuedoRaw: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "raw"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {çõüñţŕÿ}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {çíţÿ}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {çíţÿ} íñ {çõüñţŕÿ}");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoText: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "text"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {city} íñ {country}");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoHtml: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {city} íñ {country}");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoHtmlWithTags: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from <span class=\"foo\">{country}</span>").toString(), "Ħëľľõ fŕõm <span class=\"foo\">{country}</span>");
        test.equal(rb.getString("Hello from <span class=\"foo\">{city}</span>").toString(), "Ħëľľõ fŕõm <span class=\"foo\">{city}</span>");
        test.equal(rb.getString("Greetings from <span class=\"foo\">{city}</span> in <span class=\"foo\">{country}</span>").toString(), "Ĝŕëëţíñğš fŕõm <span class=\"foo\">{city}</span> íñ <span class=\"foo\">{country}</span>");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoHtmlWithMultipleTags: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from <div><span class=\"foo\">{country}</span></div>").toString(), "Ħëľľõ fŕõm <div><span class=\"foo\">{country}</span></div>");
        test.equal(rb.getString("Hello from <div><span class=\"foo\">{city}</span></div>").toString(), "Ħëľľõ fŕõm <div><span class=\"foo\">{city}</span></div>");
        test.equal(rb.getString("Greetings from <div><span class=\"foo\">{city}</span></div> in <div><span class=\"foo\">{country}</span></div>").toString(), "Ĝŕëëţíñğš fŕõm <div><span class=\"foo\">{city}</span></div> íñ <div><span class=\"foo\">{country}</span></div>");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoHtmlWithTagsAndEntities: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from &amp;<span class=\"foo\">{country}</span>&mdash;").toString(), "Ħëľľõ fŕõm &amp;<span class=\"foo\">{country}</span>&mdash;");
        test.equal(rb.getString("Hello from &amp;<span class=\"foo\">{city}</span>&mdash;").toString(), "Ħëľľõ fŕõm &amp;<span class=\"foo\">{city}</span>&mdash;");
        test.equal(rb.getString("Greetings from &amp;<span class=\"foo\">{city}</span>&mdash; in &amp;<span class=\"foo\">{country}</span>&mdash;").toString(), "Ĝŕëëţíñğš fŕõm &amp;<span class=\"foo\">{city}</span>&mdash; íñ &amp;<span class=\"foo\">{country}</span>&mdash;");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoXml: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "xml"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {city} íñ {country}");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoC: function(test) {
        test.expect(38);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "c",
            lengthen: true
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the C style replacement parameters
        test.equal(rb.getStringJS("actual %s "), "àçţüàľ %s 43210");
        test.equal(rb.getStringJS("actual %b "), "àçţüàľ %b 43210");
        test.equal(rb.getStringJS("actual %h "), "àçţüàľ %h 43210");
        test.equal(rb.getStringJS("actual %c "), "àçţüàľ %c 43210");
        test.equal(rb.getStringJS("actual %d "), "àçţüàľ %d 43210");
        test.equal(rb.getStringJS("actual %o "), "àçţüàľ %o 43210");
        test.equal(rb.getStringJS("actual %x "), "àçţüàľ %x 43210");
        test.equal(rb.getStringJS("actual %e "), "àçţüàľ %e 43210");
        test.equal(rb.getStringJS("actual %f "), "àçţüàľ %f 43210");
        test.equal(rb.getStringJS("actual %g "), "àçţüàľ %g 43210");
        test.equal(rb.getStringJS("actual %a "), "àçţüàľ %a 43210");
        test.equal(rb.getStringJS("actual %t "), "àçţüàľ %t 43210");
        test.equal(rb.getStringJS("actual %% "), "àçţüàľ %% 43210");
        test.equal(rb.getStringJS("actual %n "), "àçţüàľ %n 43210");
        
        test.equal(rb.getStringJS("actual %S "), "àçţüàľ %S 43210");
        test.equal(rb.getStringJS("actual %B "), "àçţüàľ %B 43210");
        test.equal(rb.getStringJS("actual %H "), "àçţüàľ %H 43210");
        test.equal(rb.getStringJS("actual %C "), "àçţüàľ %C 43210");
        test.equal(rb.getStringJS("actual %X "), "àçţüàľ %X 43210");
        test.equal(rb.getStringJS("actual %E "), "àçţüàľ %E 43210");
        test.equal(rb.getStringJS("actual %G "), "àçţüàľ %G 43210");
        test.equal(rb.getStringJS("actual %A "), "àçţüàľ %A 43210");
        test.equal(rb.getStringJS("actual %T "), "àçţüàľ %T 43210");
        test.equal(rb.getStringJS("actual %% "), "àçţüàľ %% 43210");
        
        test.equal(rb.getStringJS("actual %2$s "), "àçţüàľ %2$s 543210");
        test.equal(rb.getStringJS("actual %-d "), "àçţüàľ %-d 543210");
        test.equal(rb.getStringJS("actual %#d "), "àçţüàľ %#d 543210");
        test.equal(rb.getStringJS("actual %+d "), "àçţüàľ %+d 543210");
        test.equal(rb.getStringJS("actual % d "), "àçţüàľ % d 543210");
        test.equal(rb.getStringJS("actual %02d "), "àçţüàľ %02d 543210");
        test.equal(rb.getStringJS("actual %.2d "), "àçţüàľ %.2d 543210");
        test.equal(rb.getStringJS("actual %(2d "), "àçţüàľ %(2d 543210");
        test.equal(rb.getStringJS("actual %4$-2.2d "), "àçţüàľ %4$-2.2d 76543210");
        
        test.equal(rb.getStringJS("actual %N "), "àçţüàľ %Ň 43210");
        test.equal(rb.getStringJS("actual %F "), "àçţüàľ %F 43210");
        test.equal(rb.getStringJS("actual %D "), "àçţüàľ %Ð 43210");
        test.equal(rb.getStringJS("actual %O "), "àçţüàľ %Ø 43210");
        test.done();
    },
    
    testResBundleGetStringOtherBundlePsuedoDefault: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX"
        });
        
        test.ok(rb !== null);
        
        // should be equivalent to "text" and not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {city} íñ {country}");
        test.done();
    },
    
    testResBundleGetStringMissingBundlePsuedoHtml: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        // should still pseudo-translate, despite having no translations
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {city} íñ {country}");
        test.done();
    },
    
    testResBundleGetStringPsuedoHtmlLengthenShort: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "html",
            lengthen: true
        });
        
        test.ok(rb !== null);
        
        // short: increase by 50%
        test.equal(rb.getString("Hello from Paris").toString(), "Ħëľľõ fŕõm Pàŕíš76543210");
        test.done();
    },
    
    testResBundleGetStringPsuedoHtmlLengthenMedium: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "html",
            lengthen: true
        });
        
        test.ok(rb !== null);
        
        // short: increase by 33%
        test.equal(rb.getString("Hello from Paris, city of lights").toString(), "Ħëľľõ fŕõm Pàŕíš, çíţÿ õf ľíğĥţš09876543210");
        test.done();
    },
    
    testResBundleGetStringPsuedoHtmlLengthenLong: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "html",
            lengthen: true
        });
        
        test.ok(rb !== null);
        
        // short: increase by 20%
        test.equal(rb.getString("Hello from Paris, city of culture, lights, and superb cuisine.").toString(), "Ħëľľõ fŕõm Pàŕíš, çíţÿ õf çüľţüŕë, ľíğĥţš, àñð šüþëŕb çüíšíñë.109876543210");
        test.done();
    },
    
    testResBundleGetStringPsuedoLeaveHTMLTags: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from <a href='url'>{city}</a>").toString(), "Ħëľľõ fŕõm <a href='url'>{city}</a>");
        test.done();
    },
    
    testResBundleGetStringPsuedoLeaveHTMLTags2: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString('<span class="n_letter">n</span>Cluster: <strong>{clusterName}</strong>').toString(), '<span class="n_letter">ñ</span>Çľüšţëŕ: <strong>{clusterName}</strong>');
        test.done();
    },
    
    testResBundleGetStringPsuedoNotLeaveHTMLTagsRaw: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "raw"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from <a href='url'>{city}</a>").toString(), "Ħëľľõ fŕõm <à ĥŕëf='üŕľ'>{çíţÿ}</à>");
        test.done();
    },
    
    testResBundleGetStringPsuedoNotLeaveHTMLTagsText: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "text"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from <a href='url'>{city}</a>").toString(), "Ħëľľõ fŕõm <à ĥŕëf='üŕľ'>{city}</à>");
        test.done();
    },
    
    testResBundleGetStringPsuedoLeaveHTMLEntities: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {city} &amp; {country}").toString(), "Ħëľľõ fŕõm {city} &amp; {country}");
        test.done();
    },
    
    testResBundleGetStringPsuedoNotLeaveHTMLEntitiesRaw: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "raw"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {city} &amp; {country}").toString(), "Ħëľľõ fŕõm {çíţÿ} &àmþ; {çõüñţŕÿ}");
        test.done();
    },
    
    testResBundleGetStringPsuedoNotLeaveHTMLEntitiesText: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "text"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {city} &amp; {country}").toString(), "Ħëľľõ fŕõm {city} &àmþ; {country}");
        test.done();
    },
    
    testResBundleGetStringMissingBundlePsuedoXml: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "xml"
        });
        
        test.ok(rb !== null);
        
        // should still pseudo-translate, despite having no translations
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {city} íñ {country}");
        test.done();
    },
    
    testResBundleGetStringPsuedoXmlLengthenShort: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "xml",
            lengthen: true
        });
        
        test.ok(rb !== null);
        
        // short: increase by 50%
        test.equal(rb.getString("Hello from Paris").toString(), "Ħëľľõ fŕõm Pàŕíš76543210");
        test.done();
    },
    
    testResBundleGetStringPsuedoXmlLengthenMedium: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "xml",
            lengthen: true
        });
        
        test.ok(rb !== null);
        
        // short: increase by 33%
        test.equal(rb.getString("Hello from Paris, city of lights").toString(), "Ħëľľõ fŕõm Pàŕíš, çíţÿ õf ľíğĥţš09876543210");
        test.done();
    },
    
    testResBundleGetStringPsuedoXmlLengthenLong: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "asdfasdffoobar",
            locale: "zxx-XX",
            type: "xml",
            lengthen: true
        });
        
        test.ok(rb !== null);
        
        // short: increase by 20%
        test.equal(rb.getString("Hello from Paris, city of culture, lights, and superb cuisine.").toString(), "Ħëľľõ fŕõm Pàŕíš, çíţÿ õf çüľţüŕë, ľíğĥţš, àñð šüþëŕb çüíšíñë.109876543210");
        test.done();
    },
    
    testResBundleGetStringPsuedoLeaveXmlTags: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "xml"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from <city type='large'>{city}</city>").toString(), "Ħëľľõ fŕõm <city type='large'>{city}</city>");
        test.done();
    },
    
    testResBundleGetStringPsuedoLeaveXmlEntities: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-XX",
            type: "xml"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {city} &amp; {country}").toString(), "Ħëľľõ fŕõm {city} &amp; {country}");
        test.done();
    },
    
    testResBundleGetStringWithKeyNamees: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "es"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {user}.", "key1").toString(), "Saludos desde {user}.");
        test.done();
    },
    
    testResBundleGetStringWithKeyNameesMX: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "es-MX"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {user}.", "key1").toString(), "Saludos desde {user}.");
        test.done();
    },
    
    testResBundleGetStringWithKeyNameesMXslang: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "es-MX-slang"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {user}.", "key1").toString(), "Buenas desde {user}.");
        test.done();
    },
    
    testResBundleGetStringWithKeyNamedeDE: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "de-DE"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {user}.", "key1").toString(), "Grüße vom {user}");
        test.done();
    },
    
    testResBundleGetStringWithKeyNameUnknown: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "de-DE"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {user}.", "key3").toString(), "Hello from {user}.");
        test.done();
    },
    
    testResBundleGetStringRightLocale: function(test) {
        test.expect(3);
        var rb = new ResBundle({
            locale: "de-DE"
        });
        
        test.ok(rb !== null);
        
        var str = rb.getString("first string");
        test.equal(str.toString(), "erste String");
        test.equal(str.getLocale(), "de-DE");
        test.done();
    },
    
    testResBundleGetResObj: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "fr"});
        
        test.ok(rb !== null);
        
        var obj = rb.getResObj();
        
        test.equal(obj["first string"], "première chaîne");
        test.equal(obj["second string"], "deuxième chaîne");
        test.equal(obj["third string"], "troisième chaîne");
        test.done();
    },
    
    testResBundleGetResObjMerge: function(test) {
        test.expect(4);
        var rb = new ResBundle({locale: "fr-CA"});
        
        test.ok(rb !== null);
        
        var obj = rb.getResObj();
        
        test.equal(obj["first string"], "première collier");
        test.equal(obj["second string"], "deuxième collier");
        test.equal(obj["third string"], "troisième chaîne");
        test.done();
    },
    
    testResBundleGetStringAcceptEmptyTranslations: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("empty").toString(), "");
        test.done();
    },
    
    testResBundleGetStringNonExistantTranslations: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        // should return source
        test.equal(rb.getString("foobar").toString(), "foobar");
        test.done();
    },
    
    testResBundleGetStringAcceptSpaceTranslations: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("space").toString(), " ");
        test.done();
    },
    
    testResBundleGetStringAcceptCommaTranslations: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("comma").toString(), ",");
        test.done();
    },
    
    testResBundleGetStringAcceptEmptyTranslationsWithKey: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("asdf", "empty").toString(), "");
        test.done();
    },
    
    testResBundleGetStringAcceptNonExistantTranslationsWithKey: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        // should return source
        test.equal(rb.getString("asdf", "foobar").toString(), "asdf");
        test.done();
    },
    
    testResBundleGetStringAcceptSpaceTranslationsWithKey: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("asdf", "space").toString(), " ");
        test.done();
    },
    
    testResBundleGetStringAcceptCommaTranslationsWithKey: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester",
            locale: "zh-CN"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("asdf", "comma").toString(), ",");
        test.done();
    },
    
    testResBundleGetStringNoResourcesReturnSource: function(test) {
        test.expect(2);
       var rb = new ResBundle({
         name: "tester",
         locale: "zz-ZZ"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("This is a test.").toString(), "This is a test.");
       test.done();
    },
    
    testResBundleGetStringNoResourcesReturnSourceHtmlTypeHtml: function(test) {
        test.expect(2);
       var rb = new ResBundle({
         name: "tester",
         locale: "zz-ZZ",
         type: "html"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("This is a <b>test</b>. A&amp;P.").toString(), "This is a <b>test</b>. A&amp;P.");
       test.done();
    },
    
    testResBundleGetStringNoResourcesReturnSourceHtmlTypejs: function(test) {
        test.expect(2);
       var rb = new ResBundle({
         name: "tester",
         locale: "zz-ZZ",
         type: "js"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("This is a <b>test</b>. A&amp;P.").toString(), "This is a <b>test</b>. A&amp;P.");
       test.done();
    },
    
    testResBundleGetStringNoResourcesReturnSourceTypejsNoEscape: function(test) {
        test.expect(2);
       var rb = new ResBundle({
         name: "tester",
         locale: "zz-ZZ",
         type: "js"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("This is a 'test'.").toString(), "This is a 'test'.");
       test.done();
    },
    
    testResBundleGetStringNoResourcesReturnSourceTypejsWithEscape: function(test) {
        test.expect(2);
       var rb = new ResBundle({
         name: "tester",
         locale: "zz-ZZ",
         type: "js"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("This is a 'test'.", undefined, "js").toString(), "This is a \\'test\\'.");
       test.done();
    },
    
    testResBundleGetStringNoResourcesReturnSourceTypeHtmlWithEscape: function(test) {
        test.expect(2);
       var rb = new ResBundle({
         name: "tester",
         locale: "zz-ZZ",
         type: "html"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("This is a <b>test</b>. A&amp;P.", undefined, "html").toString(), "This is a &lt;b&gt;test&lt;/b&gt;. A&amp;amp;P.");
       test.done();
    },
    
    testResBundleGetStringNoResourcesReturnSourceTypeHtmlWithEscapeJS: function(test) {
        test.expect(2);
       var rb = new ResBundle({
         name: "tester",
         locale: "zz-ZZ",
         type: "html"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("This is <a href=\"a test\">a 'test'</a>.", undefined, "js").toString(), "This is <a href=\\\"a test\\\">a \\'test\\'</a>.");
       test.done();
    },
    
    testResBundleGetStringPsuedoHtmlNoEscape: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "asdfasdffoobar",
           locale: "zxx-XX",
           type: "html"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.").toString(), "Ħëľľõ fŕõm <a href=\"asdf\">Pàŕíš</a>, çíţÿ õf ľíğĥţš.");
       test.done();
    },
    
    testResBundleGetStringPsuedoHtmlEscapeHtml: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "asdfasdffoobar",
           locale: "zxx-XX",
           type: "html"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.", undefined, "html").toString(), "Ħëľľõ fŕõm &lt;a href=\"asdf\"&gt;Pàŕíš&lt;/a&gt;, çíţÿ õf ľíğĥţš.");
       test.done();
    },
    
    testResBundleGetStringPsuedoHtmlEscapeJS: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "asdfasdffoobar",
           locale: "zxx-XX",
           type: "html"
       });
       
       test.ok(rb !== null);
       
       test.equal(rb.getString("Hello from <a href=\"asdf\">Paris</a>, city of lights.", undefined, "js").toString(), "Ħëľľõ fŕõm <a href=\\\"asdf\\\">Pàŕíš</a>, çíţÿ õf ľíğĥţš.");
       test.done();
    },
    
    testResBundleContainsKeyByKeyTrue: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "strings",
           locale: "de-DE"
       });
       
       test.ok(rb !== null);
       
       test.ok(rb.containsKey(undefined, "first string"));
       test.done();
    },
    
    testResBundleContainsKeyByKeyFalse: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "strings",
           locale: "de-DE"
       });
       
       test.ok(rb !== null);
       
       test.ok(!rb.containsKey(undefined, "asdfasdf"));
       test.done();
    },
    
    testResBundleContainsKeyBySourceTrue: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "strings",
           locale: "de-DE"
       });
       
       test.ok(rb !== null);
       
       test.ok(rb.containsKey("first string"));
       test.done();
    },
    
    testResBundleContainsKeyBySourceFalse: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "strings",
           locale: "de-DE"
       });
       
       test.ok(rb !== null);
       
       test.ok(!rb.containsKey("asdfasdf"));
       test.done();
    },
    
    testResBundleContainsKeyBySourceMakeKey: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "strings",
           locale: "de-DE"
       });
       
       test.ok(rb !== null);
       
       test.ok(rb.containsKey("first   \t\t\r\n  string"));
       test.done();
    },
    
    testResBundleContainsKeyBothUndefined: function(test) {
        test.expect(2);
       var rb = new ResBundle({
           name: "strings",
           locale: "de-DE"
       });
       
       test.ok(rb !== null);
       
       test.ok(!rb.containsKey(undefined, undefined));
       test.done();
    },
    
    testResBundleConstructAsynchPreassembled: function(test) {
        test.expect(6);
        var onloadcalled = false;
        ResBundle.resources = undefined;
        var rb = new ResBundle({
            locale: "fr-CA-govt",
            sync: false,
            onLoad: function(rb) {
                test.ok(typeof(rb) !== "undefined");
                
                test.equal(rb.getString("first string").toString(), "première corde");
                test.equal(rb.getString("second string").toString(), "deuxième collier");
                test.equal(rb.getString("third string").toString(), "troisième corde");
                
                onloadcalled = true;
            }
        });
        
        test.ok(typeof(rb) !== "undefined");
        test.ok(onloadcalled);
        test.done();
    },
    
    testResBundleConstructAsynchPreassembledCached: function(test) {
        test.expect(6);
        var onloadcalled = false;
        var rb = new ResBundle({
            locale: "fr-CA-govt",
            sync: false,
            onLoad: function(rb) {
                test.ok(typeof(rb) !== "undefined");
                
                test.equal(rb.getString("first string").toString(), "première corde");
                test.equal(rb.getString("second string").toString(), "deuxième collier");
                test.equal(rb.getString("third string").toString(), "troisième corde");
                
                onloadcalled = true;
            }
        });
        
        test.ok(typeof(rb) !== "undefined");
        test.ok(onloadcalled);
        test.done();
    },
    
    testResBundleConstructAsynchDynamic: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        var onloadcalled = false;
        ilib.setLoaderCallback(mockLoaderRes);
        var rb = new ResBundle({
            locale: "de-DE-SAP",
            name: "foobar",
            sync: false,
            onLoad: function(rb) {
        test.expect(6);
                test.ok(typeof(rb) !== "undefined");
                
                test.equal(rb.getString("first string").toString(), "erste String");
                test.equal(rb.getString("second string").toString(), "zweite String");
                test.equal(rb.getString("third string").toString(), "dritte String");
                
                onloadcalled = true;
            }
        });
        
        ilib.setLoaderCallback(oldLoader);
        test.ok(typeof(rb) !== "undefined");
        test.ok(onloadcalled);
        test.done();
    },
    
    testResBundleConstructSynchDynamic: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderRes);
        var rb = new ResBundle({
            locale: "de-DE-SAP",
            name: "foobar"
        });
        
        test.expect(4);
        test.ok(typeof(rb) !== "undefined");
        
        ilib.setLoaderCallback(oldLoader);
    
        test.equal(rb.getString("first string").toString(), "erste String");
        test.equal(rb.getString("second string").toString(), "zweite String");
        test.equal(rb.getString("third string").toString(), "dritte String");
        test.done();
    },
    
    testResBundleConstructAsynchDynamicDefaultName: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderRes);
        var rb = new ResBundle({
            locale: "fr-CA-govt",
            sync: false,
            onLoad: function(rb) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(4);
                test.ok(typeof(rb) !== "undefined");
                
                test.equal(rb.getString("first string").toString(), "première corde");
                test.equal(rb.getString("second string").toString(), "deuxième collier");
                test.equal(rb.getString("third string").toString(), "troisième corde");
                test.done();
            }
        });
    },
    
    testResBundleConstructSynchDynamicDefaultName: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderRes);
        var rb = new ResBundle({
            locale: "fr-CA-govt"
        });
        
        test.expect(4);
        test.ok(typeof(rb) !== "undefined");
        
        ilib.setLoaderCallback(oldLoader);
    
        test.equal(rb.getString("first string").toString(), "première corde");
        test.equal(rb.getString("second string").toString(), "deuxième collier");
        test.equal(rb.getString("third string").toString(), "troisième corde");
        test.done();
    },
    
    testResBundleConstructAsynchDynamicNoStrings: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderRes);
        var rb = new ResBundle({
            locale: "de-DE-SAP",
            name: "asdf", // doesn't exist
            sync: false,
            onLoad: function(rb) {
                test.expect(4);
                test.ok(typeof(rb) !== "undefined");
                ilib.setLoaderCallback(oldLoader);
    
                test.equal(rb.getString("first string").toString(), "first string");
                test.equal(rb.getString("second string").toString(), "second string");
                test.equal(rb.getString("third string").toString(), "third string");
                test.done();
                
                onloadcalled = true;
            }
        });
    },
    
    testResBundleConstructSynchDynamicNoStrings: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderRes);
        var rb = new ResBundle({
            locale: "de-DE-SAP",
            name: "asdf" // doesn't exist
        });
        
        test.expect(4);
        test.ok(typeof(rb) !== "undefined");
    
        ilib.setLoaderCallback(oldLoader);
        
        test.equal(rb.getString("first string").toString(), "first string");
        test.equal(rb.getString("second string").toString(), "second string");
        test.equal(rb.getString("third string").toString(), "third string");
        test.done();
    },
    
    
    testResBundleGetStringCyrlPsuedoRaw: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-Cyrl-XX",
            type: "raw"
        });
        
        test.ok(rb !== null);
        
        // should pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Хэлло фром {чоунтря}");
        test.equal(rb.getString("Hello from {city}").toString(), "Хэлло фром {читя}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Грээтингс фром {читя} ин {чоунтря}");
        test.done();
    },
    
    testResBundleGetStringCyrlPsuedoText: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-Cyrl-XX",
            type: "text"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Хэлло фром {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Хэлло фром {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Грээтингс фром {city} ин {country}");
        test.done();
    },
    
    testResBundleGetStringCyrlPsuedoHtml: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-Cyrl-XX",
            type: "html"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Хэлло фром {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Хэлло фром {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Грээтингс фром {city} ин {country}");
        test.done();
    },
    
    testResBundleGetStringCyrlPsuedoXml: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-Cyrl-XX",
            type: "xml"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Хэлло фром {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Хэлло фром {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Грээтингс фром {city} ин {country}");
        test.done();
    },
    
    testResBundleGetStringCyrlPsuedoDefault: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-Cyrl-XX"
        });
        
        test.ok(rb !== null);
        
        // should be equivalent to "text" and not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Хэлло фром {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Хэлло фром {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Грээтингс фром {city} ин {country}");
        test.done();
    },
    
    testResBundleGetStringHansPsuedoText: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-Hans-XX",
            type: "text"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        // for Chinese scripts, remove the spaces to the simulate Chinese writing style
        test.equal(rb.getString("Hello from {country}").toString(), "和俄了了夥凡熱夥们{country}");
        test.equal(rb.getString("Hello from {city}").toString(), "和俄了了夥凡熱夥们{city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "个熱俄俄推意尼个思凡熱夥们{city}意尼{country}");
        test.done();
    },
    
    testResBundleGetStringHebrPsuedoText: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester",
            locale: "zxx-Hebr-XX",
            type: "text"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "הֶללֹ פרֹמ {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "הֶללֹ פרֹמ {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "גרֶֶטִנגס פרֹמ {city} ִנ {country}");
        test.done();
    },
    
    
    testResBundleGetStringMissingWrongValue: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            missing: "foo"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.missing, "source");
        test.done();
    },
    
    testResBundleGetStringMissingRightValue1: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            missing: "pseudo"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.missing, "pseudo");
        test.done();
    },
    
    testResBundleGetStringMissingRightValue2: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            missing: "source"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.missing, "source");
        test.done();
    },
    
    testResBundleGetStringMissingRightValue3: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            missing: "empty"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.missing, "empty");
        test.done();
    },
    
    testResBundleGetStringCyrlMissingRawSource: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            type: "raw",
            missing: "source"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {country}").toString(), "Hello from {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Hello from {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Greetings from {city} in {country}");
        test.done();
    },
    
    testResBundleGetStringCyrlMissingRawPseudo: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            type: "raw",
            missing: "pseudo"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {country}").toString(), "Хэлло фром {чоунтря}");
        test.equal(rb.getString("Hello from {city}").toString(), "Хэлло фром {читя}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Грээтингс фром {читя} ин {чоунтря}");
        test.done();
    },
    
    testResBundleGetStringCyrlMissingRawEmpty: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            type: "raw",
            missing: "empty"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("Hello from {country}").toString(), "");
        test.equal(rb.getString("Hello from {city}").toString(), "");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "");
        test.done();
    },
    
    testResBundleGetStringLatnMissingPsuedo: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester2",
            locale: "de-DE",
            missing: "pseudo"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Ħëľľõ fŕõm {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Ħëľľõ fŕõm {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Ĝŕëëţíñğš fŕõm {city} íñ {country}");
        test.done();
    },
    
    testResBundleGetStringCyrlMissingPsuedo: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester2",
            locale: "ru-RU",
            missing: "pseudo"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "Хэлло фром {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "Хэлло фром {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "Грээтингс фром {city} ин {country}");
        test.done();
    },
    
    testResBundleGetStringHebrMissingPsuedo: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester2",
            locale: "he-IL",
            missing: "pseudo"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        test.equal(rb.getString("Hello from {country}").toString(), "הֶללֹ פרֹמ {country}");
        test.equal(rb.getString("Hello from {city}").toString(), "הֶללֹ פרֹמ {city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "גרֶֶטִנגס פרֹמ {city} ִנ {country}");
        test.done();
    },
    
    testResBundleGetStringHansMissingPsuedo: function(test) {
        test.expect(4);
        var rb = new ResBundle({
            name: "tester2",
            locale: "zh-Hans-CN",
            missing: "pseudo"
        });
        
        test.ok(rb !== null);
        
        // should not pseudo-ize the replacement parameter names
        // for Chinese scripts, remove the spaces to the simulate Chinese writing style
        test.equal(rb.getString("Hello from {country}").toString(), "和俄了了夥凡熱夥们{country}");
        test.equal(rb.getString("Hello from {city}").toString(), "和俄了了夥凡熱夥们{city}");
        test.equal(rb.getString("Greetings from {city} in {country}").toString(), "个熱俄俄推意尼个思凡熱夥们{city}意尼{country}");
        test.done();
    },
    
    testResBundleGetStringWithSpaces: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString(" This is a test. ").toString(), "test1");
        test.done();
    },
    
    testResBundleGetStringCompressSpaces: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("    This    is     a     test.     ").toString(), "test1");
        test.done();
    },
    
    testResBundleGetStringConvertAllWhiteToSpaces: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString(" \t\r   This \n\n   is \n\t    a    \t test.  \n   ").toString(), "test1");
        test.done();
    },
    
    testResBundleGetStringCompressSpacesEnd: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("This    is     a     test.     ").toString(), "test2");
        test.done();
    },
    
    testResBundleGetStringCompressSpacesBeginning: function(test) {
        test.expect(2);
        var rb = new ResBundle({
            name: "tester2"
        });
        
        test.ok(rb !== null);
        
        test.equal(rb.getString("     This    is     a     test.").toString(), "test3");
        test.done();
    },
    
    testResBundlePseudo_euES: function(test) {
        test.expect(1);
        ilib.clearPseudoLocales();
        ilib.setAsPseudoLocale("eu-ES");
        var rb = new ResBundle({
            locale:'eu-ES'
        });
        test.equal(rb.getString("This is psuedo string test").toString(), "Ťĥíš íš þšüëðõ šţŕíñğ ţëšţ");
        test.done();
        ilib.clearPseudoLocales();
    },
    
    testResBundlePseudo_psAF: function(test) {
        test.expect(1);
        ilib.clearPseudoLocales();
        ilib.setAsPseudoLocale("ps-AF");
        var rb = new ResBundle({
            locale:'ps-AF'
        });
        test.equal(rb.getString("This is psuedo string test").toString(), "טהִס ִס פסֶֻדֹ סטרִנג טֶסט");
        test.done();
        ilib.clearPseudoLocales();
    },
    
    testResBundlePseudo_deDE: function(test) {
        test.expect(1);
        ilib.clearPseudoLocales();
        ilib.setAsPseudoLocale("de-DE");
        var rb = new ResBundle({
            locale:'de-DE'
        });
        test.equal(rb.getString("This is psuedo string test").toString(), "Ťĥíš íš þšüëðõ šţŕíñğ ţëšţ");
        test.done();
        ilib.clearPseudoLocales();
    },
    
    testResBundlePseudoReallyThere: function(test) {
        test.expect(2);
        ilib.clearPseudoLocales();
        test.equal(ilib.pseudoLocales.indexOf("de-DE"), -1);
        ilib.setAsPseudoLocale("de-DE");
        test.equal(ilib.pseudoLocales.indexOf("de-DE"), 4);
        test.done();
        ilib.clearPseudoLocales();
    },
    
    testResBundlePseudoIsPseudo: function(test) {
        test.expect(2);
        var loc = new Locale("de-DE");
        ilib.clearPseudoLocales();
        test.ok(!loc.isPseudo());
        ilib.setAsPseudoLocale("de-DE");
        test.ok(loc.isPseudo());
        test.done();
        ilib.clearPseudoLocales();
    },
    
    testResBundlePsuedo_EMPTY: function(test) {
        test.expect(1);
        ilib.clearPseudoLocales();
        ilib.setAsPseudoLocale("");
        var rb = new ResBundle({
            locale:""
        });
        test.equal(rb.getString("This is psuedo string test").toString(), "This is psuedo string test");
        test.done();
        ilib.clearPseudoLocales();
    },
    
    testResBundlePsuedoEmptyNothingAdded: function(test) {
        test.expect(2);
        ilib.clearPseudoLocales();
        test.equal(ilib.pseudoLocales.length, 4);
        ilib.setAsPseudoLocale("");
        test.equal(ilib.pseudoLocales.length, 4);
        test.done();
        ilib.clearPseudoLocales();
    },
    
    testResBundlePsuedoUndefinedNothingAdded: function(test) {
        test.expect(2);
        ilib.clearPseudoLocales();
        test.equal(ilib.pseudoLocales.length, 4);
        ilib.setAsPseudoLocale();
        test.equal(ilib.pseudoLocales.length, 4);
        test.done();
        
        ilib.clearPseudoLocales();
    },
    
    testClearPseudoLocalesOldOnesGone: function(test) {
        test.expect(2);
        var loc = new Locale("de-DE");
        ilib.setAsPseudoLocale("de-DE");
        test.ok(loc.isPseudo());
        
        ilib.clearPseudoLocales();
        
        test.ok(!loc.isPseudo());
        test.done();
    },
    
    testClearResetToDefaults: function(test) {
        test.expect(4);
        ilib.clearPseudoLocales();
    
        var loc = new Locale("zxx-XX");
        test.ok(loc.isPseudo());
        
        loc = new Locale("zxx-Hans-XX");
        test.ok(loc.isPseudo());
        loc = new Locale("zxx-Cyrl-XX");
        test.ok(loc.isPseudo());
        loc = new Locale("zxx-Hebr-XX");
        test.ok(loc.isPseudo());
        test.done();
    },
    
    testResBundleWithDefaultLocaleBeingPseudo: function(test) {
        test.expect(1);
        ilib.clearPseudoLocales();
        var tmp = ilib.getLocale();
        
        ilib.setLocale("zxx-XX"); // pseudo-locale
        
        // this used to throw an exception:
        var rb = new ResBundle();
        
        test.equal(rb.getStringJS("translation"), "ţŕàñšľàţíõñ");
        test.done();
        
        ilib.setLocale(tmp);
    }
};