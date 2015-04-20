/*
 * bentimezone_subsequent_assembled.js - benchmark the TimeZone object with subsequent assembled formats
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

ilib.data.timezones = {
    "America/Los_Angeles": {
        "o": "-8:0",
        "f": "P{c}T",
        "e": {
            "m": 11,
            "r": "0>1",
            "t": "2:0",
            "c": "S"
        },
        "s": {
            "m": 3,
            "r": "0>8",
            "t": "2:0",
            "v": "1:0",
            "c": "D"
        },
        "c": "US",
        "n": "Pacific {c} Time"
    },
    "Etc/UTC": {
        "o": "0:0",
        "f": "UTC"
    },
    "Europe/Berlin": {
        "o": "1:0",
        "f": "CE{c}T",
        "e": {
            "m": 10,
            "r": "l0",
            "t": "1:0",
            "z": "u"
        },
        "s": {
            "m": 3,
            "r": "l0",
            "t": "1:0",
            "z": "u",
            "v": "1:0",
            "c": "S"
        },
        "c": "DE",
        "n": "W. Europe {c} Time"
    },
    "Europe/Paris": {
        "o": "1:0",
        "f": "CE{c}T",
        "e": {
            "m": 10,
            "r": "l0",
            "t": "1:0",
            "z": "u"
        },
        "s": {
            "m": 3,
            "r": "l0",
            "t": "1:0",
            "z": "u",
            "v": "1:0",
            "c": "S"
        },
        "c": "FR",
        "n": "Romance {c} Time"
    },
    "Asia/Taipei": {
        "o": "8:0",
        "f": "C{c}T",
        "e": {
            "m": 9,
            "r": "30",
            "t": "0:0",
            "c": "S"
        },
        "s": {
            "m": 6,
            "r": "30",
            "t": "0:0",
            "v": "1:0",
            "c": "D"
        },
        "c": "TW",
        "n": "Taipei {c} Time"
    }
};

ilib.data.plurals_en={one:{is:["n",1]}};
ilib.data.plurals_de={one:{is:["n",1]}};
ilib.data.plurals_fr={one:{and:[{within:["n",[[0,2]]]},{isnot:["n",2]}]}};

ilib.data.pseudomap = {"a":"à","c":"ç","d":"ð","e":"ë","g":"ğ","h":"ĥ","i":"í","j":"ĵ","k":"ķ","l":"ľ","n":"ñ","o":"õ","p":"þ","r":"ŕ","s":"š","t":"ţ","u":"ü","w":"ŵ","y":"ÿ","z":"ž","A":"Ã","B":"ß","C":"Ç","D":"Ð","E":"Ë","G":"Ĝ","H":"Ħ","I":"Ï","J":"Ĵ","K":"ĸ","L":"Ľ","N":"Ň","O":"Ø","R":"Ŗ","S":"Š","T":"Ť","U":"Ú","W":"Ŵ","Y":"Ŷ","Z":"Ż"};

ilib.data.localeinfo = {"calendar":"gregorian","clock":"24","currency":"USD","delimiter":{"quotationStart":"“","quotationEnd":"”","alternateQuotationStart":"‘","alternateQuotationEnd":"’"},"firstDayOfWeek":1,"numfmt":{"script":"Latn","decimalChar":",","groupChar":".","prigroupSize":3,"pctFmt":"{n}%","pctChar":"%","roundingMode":"halfdown","exponential":"e","currencyFormats":{"common":"{s}{n}","commonNegative":"{s}-{n}"}},"timezone":"Etc/UTC","units":"metric"};
ilib.data.localeinfo_en = {"clock":"12","language.name":"English","numfmt":{"decimalChar":".","groupChar":",","currencyFormats":{"commonNegative":"({s}{n})"}},"scripts":["Latn","Dsrt","Shaw"],"locale":"en"};
ilib.data.localeinfo_US = {"currency":"USD","firstDayOfWeek":0,"paperSizes":{"regular":"8x11"},"region.name":"United States","timezone":"America/New_York","units":"uscustomary","locale":"US"};
ilib.data.localeinfo_de = {"delimiter":{"quotationStart":"„","quotationEnd":"“","alternateQuotationStart":"‚","alternateQuotationEnd":"‘"},"language.name":"German","numfmt":{"exponential":"E","currencyFormats":{"common":"{n} {s}"},"pctFmt":"{n} %"},"paperSizes":{"regular":"A4","photo":"4x6"},"scripts":["Latn","Runr"],"locale":"de"};
ilib.data.localeinfo_DE = {"currency":"EUR","firstDayOfWeek":1,"region.name":"Germany","timezone":"Europe/Berlin","locale":"DE"};
ilib.data.localeinfo_fr = {"delimiter":{"quotationStart":"«","quotationEnd":"»","alternateQuotationStart":"«","alternateQuotationEnd":"»"},"language.name":"French","numfmt":{"groupChar":" ","exponential":"E","currencyFormats":{"common":"{n} {s}","commonNegative":"({n} {s})"},"pctFmt":"{n} %"},"paperSizes":{"regular":"A4","photo":"4x6"},"scripts":["Latn"],"locale":"fr"};
ilib.data.localeinfo_FR = {"currency":"EUR","firstDayOfWeek":1,"region.name":"France","timezone":"Europe/Paris","locale":"FR"};
ilib.data.localeinfo_zh = {"clock":"12","language.name":"Chinese","native_numfmt":{"script":"Hani","decimalChar":".","groupChar":",","pctChar":"%","exponential":"E","prigroupSize":3,"currencyFormats":{"common":"{s}{n}","commonNegative":"({s}{n})"},"pctFmt":"{n}%","roundingMode":"halfdown","useNative":true,"digits":"〇一二三四五六七八九"},"numfmt":{"decimalChar":".","groupChar":",","exponential":"E","useNative":false,"currencyFormats":{"commonNegative":"({s}{n})"}},"scripts":["Hans","Hant","Bopo","Phag"],"locale":"zh"};
ilib.data.localeinfo_TW = {"currency":"TWD","firstDayOfWeek":0,"region.name":"Taiwan","timezone":"Asia/Taipei","locale":"TW"};

function testTimeZoneConstructorEmptySubsequent(results) {
	new ilib.TimeZone();

	var tt = new TimedTest({
		name: "TimeZone-assembled-empty-subsequent",
		iterations: 100,
		fn: function () {
		    var fmt = new ilib.TimeZone();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorRealSubsequentLocale(results) {
	new ilib.TimeZone({
		locale: "de-DE"
	});

	var tt = new TimedTest({
		name: "TimeZone-assembled-normal-subsequent",
		iterations: 100,
		fn: function () {
			var fmt = new ilib.TimeZone({
				locale: "de-DE"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorRealSubsequentId(results) {
	new ilib.TimeZone({
		id: "Europe/Berlin"
	});

	var tt = new TimedTest({
		name: "TimeZone-assembled-normal-subsequent",
		iterations: 100,
		fn: function () {
			var fmt = new ilib.TimeZone({
				id: "Europe/Berlin"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorNonexistentSubsequent(results) {
	new ilib.TimeZone({
		id: "xx-YY"
	});

	var tt = new TimedTest({
		name: "TimeZone-assembled-nonexistent-subsequent",
		iterations: 100,
		fn: function () {
			var fmt = new ilib.TimeZone({
				id: "xx-YY"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
