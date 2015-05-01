/*
 * benscriptinfo_initial_assembled.js - benchmark the ScriptInfo object with initial assembled formats
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

var ilib = require("./../lib/ilib.js");
var ScriptInfo = require("./../lib/ScriptInfo.js");
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

ilib.data.scriptToRange = {
	"Latn": [
         [
             65,
             90
         ],
         [
             97,
             122
         ],
         [
             170
         ],
         [
             186
         ],
         [
             192,
             214
         ],
         [
             216,
             246
         ],
         [
             248,
             696
         ],
         [
             736,
             740
         ],
         [
             7424,
             7461
         ],
         [
             7468,
             7516
         ],
         [
             7522,
             7525
         ],
         [
             7531,
             7543
         ],
         [
             7545,
             7614
         ],
         [
             7680,
             7935
         ],
         [
             8305
         ],
         [
             8319
         ],
         [
             8336,
             8348
         ],
         [
             8490,
             8491
         ],
         [
             8498
         ],
         [
             8526
         ],
         [
             8544,
             8584
         ],
         [
             11360,
             11391
         ],
         [
             42786,
             42887
         ],
         [
             42891,
             42894
         ],
         [
             42896,
             42899
         ],
         [
             42912,
             42922
         ],
         [
             43000,
             43007
         ],
         [
             64256,
             64262
         ],
         [
             65313,
             65338
         ],
         [
             65345,
             65370
         ]
     ],
     "Cyrl": [
         [
             1024,
             1156
         ],
         [
             1159,
             1319
         ],
         [
             7467
         ],
         [
             7544
         ],
         [
             11744,
             11775
         ],
         [
             42560,
             42647
         ],
         [
             42655
         ]
     ],
     "Arab": [
         [
             1536,
             1540
         ],
         [
             1542,
             1547
         ],
         [
             1549,
             1562
         ],
         [
             1566
         ],
         [
             1568,
             1599
         ],
         [
             1601,
             1610
         ],
         [
             1622,
             1631
         ],
         [
             1642,
             1647
         ],
         [
             1649,
             1756
         ],
         [
             1758,
             1791
         ],
         [
             1872,
             1919
         ],
         [
             2208
         ],
         [
             2210,
             2220
         ],
         [
             2276,
             2302
         ],
         [
             64336,
             64449
         ],
         [
             64467,
             64829
         ],
         [
             64848,
             64911
         ],
         [
             64914,
             64967
         ],
         [
             65008,
             65020
         ],
         [
             65136,
             65140
         ],
         [
             65142,
             65276
         ],
         [
             69216,
             69246
         ],
         [
             126464,
             126467
         ],
         [
             126469,
             126495
         ],
         [
             126497,
             126498
         ],
         [
             126500
         ],
         [
             126503
         ],
         [
             126505,
             126514
         ],
         [
             126516,
             126519
         ],
         [
             126521
         ],
         [
             126523
         ],
         [
             126530
         ],
         [
             126535
         ],
         [
             126537
         ],
         [
             126539
         ],
         [
             126541,
             126543
         ],
         [
             126545,
             126546
         ],
         [
             126548
         ],
         [
             126551
         ],
         [
             126553
         ],
         [
             126555
         ],
         [
             126557
         ],
         [
             126559
         ],
         [
             126561,
             126562
         ],
         [
             126564
         ],
         [
             126567,
             126570
         ],
         [
             126572,
             126578
         ],
         [
             126580,
             126583
         ],
         [
             126585,
             126588
         ],
         [
             126590
         ],
         [
             126592,
             126601
         ],
         [
             126603,
             126619
         ],
         [
             126625,
             126627
         ],
         [
             126629,
             126633
         ],
         [
             126635,
             126651
         ],
         [
             126704,
             126705
         ]
     ],
     "Hang": [
         [
             4352,
             4607
         ],
         [
             12334,
             12335
         ],
         [
             12593,
             12686
         ],
         [
             12800,
             12830
         ],
         [
             12896,
             12926
         ],
         [
             43360,
             43388
         ],
         [
             44032,
             55203
         ],
         [
             55216,
             55238
         ],
         [
             55243,
             55291
         ],
         [
             65440,
             65470
         ],
         [
             65474,
             65479
         ],
         [
             65482,
             65487
         ],
         [
             65490,
             65495
         ],
         [
             65498,
             65500
         ]
     ]
 };
ilib.data.scripts = {
    "Arab": {
        "nb": 160,
        "nm": "Arabic",
        "lid": "Arabic",
        "rtl": true,
        "ime": false,
        "casing": false
    },
    "Cyrl": {
        "nb": 220,
        "nm": "Cyrillic",
        "lid": "Cyrillic",
        "rtl": false,
        "ime": false,
        "casing": true
    },
    "Kore": {
        "nb": 287,
        "nm": "Korean (alias for Hangul + Han)",
        "lid": "Korean_(alias_for_Hangul_+_Han)",
        "rtl": false,
        "ime": true,
        "casing": false
    },
    "Latn": {
        "nb": 215,
        "nm": "Latin",
        "lid": "Latin",
        "rtl": false,
        "ime": false,
        "casing": true
    }
};
		
function testScriptInfoConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "ScriptInfo-assembled-empty-initial",
		fn: function () {
		    var fmt = new ScriptInfo();
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testScriptInfoConstructorRealInitial(results) {
	var tt = new TimedTest({
		name: "ScriptInfo-assembled-normal-initial",
		fn: function () {
			var fmt = new ScriptInfo("Hang");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testScriptInfoConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "ScriptInfo-assembled-nonexistent-initial",
		fn: function () {
			var fmt = new ScriptInfo("xxxx");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

