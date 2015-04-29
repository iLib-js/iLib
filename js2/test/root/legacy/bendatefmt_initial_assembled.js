/*
 * bendatefmt_initial_assembled.js - benchmark the DateFmt object with initial assembled formats
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

ilib.data.dateformats = {"gregorian":{"order":"{date} {time}","date":{"dmwy":{"s":"EE d/M/yy","m":"EEE d/MM/yyyy","l":"EEE d MMM yyyy","f":"EEEE d MMMM yyyy"},"dmy":{"s":"d/M/yy","m":"d/MM/yyyy","l":"d MMM yyyy","f":"d MMMM yyyy"},"dmw":{"s":"EE d/M","m":"EE d/MM","l":"EEE d MMM","f":"EEEE d MMMM"},"dm":{"s":"d/M","m":"d/MM","l":"d MMM","f":"d MMMM"},"my":{"s":"M/yy","m":"MM/yyyy","l":"MMM yyyy","f":"MMMM yyyy"},"dw":{"s":"EE d","m":"EE d","l":"EEE d","f":"EEEE d"},"d":"dd","m":{"s":"M","m":"MM","l":"MMM","f":"MMMM"},"y":{"s":"yy","m":"yyyy","l":"yyyy","f":"yyyy"},"n":{"s":"N","m":"NN","l":"MMM","f":"MMMM"},"w":{"s":"E","m":"EE","l":"EEE","f":"EEEE"}},"time":{"12":{"ahmsz":"h:mm:ssa z","ahms":"h:mm:ssa","hmsz":"h:mm:ss z","hms":"h:mm:ss","ahmz":"h:mma z","ahm":"h:mma","hmz":"h:mm z","ah":"ha","hm":"h:mm","ms":"mm:ss","h":"h","m":"mm","s":"ss"},"24":{"ahmsz":"H:mm:ss z","ahms":"H:mm:ss","hmsz":"H:mm:ss z","hms":"H:mm:ss","ahmz":"H:mm z","ahm":"H:mm","hmz":"H:mm z","ah":"H","hm":"H:mm","ms":"mm:ss","h":"H","m":"mm","s":"ss"}},"range":{"c00":{"s":"{st} - {et} {sd}/{sm}/{sy}","m":"{st} - {et}, {sd}/{sm}/{sy}","l":"{st} - {et}, {sd} {sm} {sy}","f":"{st} - {et}, {sd} {sm} {sy}"},"c01":{"s":"{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}","m":"{sd}/{sm} {st} - {ed}/{em} {et}, {sy}","l":"{sd} {st} - {ed} {et}, {sm} {sy}","f":"{sd} {st} - {ed} {et}, {sm} {sy}"},"c02":{"s":"{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}","m":"{sd}/{sm} {st} - {ed}/{em} {et}, {sy}","l":"{sd} {sm} {st} - {ed} {em} {et}, {sy}","f":"{sd} {sm} {st} - {ed} {em} {et}, {sy}"},"c03":{"s":"{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}","m":"{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}","l":"{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}","f":"{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}"},"c10":{"s":"{sd}-{ed}/{sm}/{sy}","m":"{sd}-{ed}/{sm}/{sy}","l":"{sd}-{ed} {sm} {sy}","f":"{sd}-{ed} {sm} {sy}"},"c11":{"s":"{sd}/{sm}-{ed}/{em} {sy}","m":"{sd}/{sm} - {ed}/{em} {sy}","l":"{sd} {sm} - {ed} {em} {sy}","f":"{sd} {sm} - {ed} {em} {sy}"},"c12":{"s":"{sd}/{sm}/{sy}-{ed}/{em}/{ey}","m":"{sd}/{sm}/{sy} - {ed}/{em}/{ey}","l":"{sd} {sm} {sy} - {ed} {em} {ey}","f":"{sd} {sm} {sy} - {ed} {em} {ey}"},"c20":{"s":"{sm}/{sy}-{em}/{ey}","m":"{sm}/{sy} - {em}/{ey}","l":"{sm} {sy} - {em} {ey}","f":"{sm} {sy} - {em} {ey}"},"c30":"{sy} - {ey}"}},"islamic":"gregorian","hebrew":"gregorian","julian":"gregorian","thaisolar":"gregorian"};
ilib.data.dateformats_en_US = {"gregorian":{"date":{"dmwy":{"s":"EE M/d/yy","m":"EEE M/dd/yyyy","l":"EEE MMM d, yyyy","f":"EEEE MMMM d, yyyy"},"dmy":{"s":"M/d/yy","m":"M/d/yyyy","l":"MMM d, yyyy","f":"MMMM d, yyyy"},"dmw":{"s":"EE M/d","m":"EE M/d","l":"EEE MMM d","f":"EEEE MMMM d"},"dm":{"s":"M/d","m":"M/d","l":"MMM d","f":"MMMM d"}},"range":{"c00":{"s":"{st} - {et} {sm}/{sd}/{sy}","m":"{st} - {et}, {sm}/{sd}/{sy}","l":"{st} - {et}, {sm} {sd}, {sy}","f":"{st} - {et}, {sm} {sd}, {sy}"},"c01":{"s":"{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}","m":"{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}","l":"{sm} {sd} {st} - {ed} {et}, {sy}","f":"{sm} {sd} {st} - {ed} {et}, {sy}"},"c02":{"s":"{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}","m":"{sm}/{sd} {st} - {em}/{ed} {et}, {sy}","l":"{sm} {sd} {st} - {em} {ed} {et}, {sy}","f":"{sm} {sd} {st} - {em} {ed} {et}, {sy}"},"c03":{"s":"{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}","m":"{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}","l":"{sm} {sd}, {sy} {st} - {em} {ed}, {ey} {et}","f":"{sm} {sd}, {sy} {st} - {em} {ed}, {ey} {et}"},"c10":{"s":"{sm}/{sd}/{sy} - {em}/{ed}/{ey}","m":"{sm}/{sd}/{sy} - {em}/{ed}/{ey}","l":"{sm} {sd}-{ed}, {sy}","f":"{sm} {sd}-{ed}, {sy}"},"c11":{"s":"{sm}/{sd}/{sy} - {em}/{ed}/{ey}","m":"{sm}/{sd} - {em}/{ed}, {sy}","l":"{sm} {sd} - {em} {ed}, {sy}","f":"{sm} {sd} - {em} {ed}, {sy}"},"c12":{"s":"{sm}/{sd}/{sy} - {em}/{ed}/{ey}","m":"{sm}/{sd}/{sy} - {em}/{ed}/{ey}","l":"{sm} {sd}, {sy} - {em} {ed}, {ey}","f":"{sm} {sd}, {sy} - {em} {ed}, {ey}"},"c20":{"s":"{sm}/{sy} - {em}/{ey}","m":"{sm}/{sy} - {em}/{ey}","l":"{sm} {sy} - {em} {ey}","f":"{sm} {sy} - {em} {ey}"},"c30":"{sy} - {ey}"}}};
ilib.data.dateformats_de = {"gregorian":{"order":"{time} {date}","date":{"dmwy":{"s":"EE dd.MM.yy","m":"EE dd.MM.yyyy","l":"EEE dd. MMM yyyy","f":"EEEE dd. MMMM yyyy"},"dmy":{"s":"dd.MM.yy","m":"dd.MM.yyyy","l":"dd. MMM yyyy","f":"dd. MMMM yyyy"},"dmw":{"s":"EE dd.MM","m":"EE dd.MM","l":"EEE dd. MMM","f":"EEEE dd. MMMM"},"dm":{"s":"dd.MM","m":"dd.MM","l":"dd. MMM","f":"dd. MMMM"},"my":{"s":"MM.yy","m":"MM.yyyy","l":"MMM yyyy","f":"MMMM yyyy"},"dw":{"s":"EE dd","m":"EEE dd","l":"EEE dd","f":"EEEE dd"},"d":"dd.","m":{"s":"MM","m":"MM","l":"MMM","f":"MMMM"},"y":{"s":"yy","m":"yyyy","l":"yyyy","f":"yyyy"},"n":{"s":"N","m":"NN","l":"MMM","f":"MMMM"}},"time":{"12":{"ahmsz":"hh:mm:ss a z","ahms":"hh:mm:ss a","hmsz":"hh:mm:ss z","hms":"hh:mm:ss","ahmz":"hh:mm a z","ahm":"hh:mm a","hmz":"hh:mm z","ah":"hh a","hm":"hh:mm","h":"hh"},"24":{"ahmsz":"HH:mm:ss z","ahms":"HH:mm:ss","hmsz":"HH:mm:ss z","hms":"HH:mm:ss","ahmz":"HH:mm z","ahm":"HH:mm","hmz":"HH:mm z","ah":"HH","hm":"HH:mm","h":"HH"}},"range":{"c00":{"s":"{st} - {et} {sd}{sm}.{sy}","m":"{st} - {et} {sd}{sm}.{sy}","l":"{st} - {et} {sd} {sm} {sy}","f":"{st} - {et} {sd} {sm} {sy}"},"c01":{"s":"{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}","m":"{st} {sd}{sm} - {et} {ed}{em} {sy}","l":"{st} {sd} {sm} - {et} {ed} {em} {sy}","f":"{st} {sd} {sm} - {et} {ed} {em} {sy}"},"c02":{"s":"{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}","m":"{st} {sd}{sm} - {et} {ed}{em} {sy}","l":"{st} {sd} {sm} - {et} {ed} {em} {sy}","f":"{st} {sd} {sm} - {et} {ed} {em} {sy}"},"c03":{"s":"{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}","m":"{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}","l":"{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}","f":"{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}"},"c10":{"s":"{sd}{sm}.{sy} - {ed}{em}.{ey}","m":"{sd}{sm}.{sy} - {ed}{em}.{ey}","l":"{sd}-{ed} {sm} {sy}","f":"{sd}-{ed} {sm} {sy}"},"c11":{"s":"{sd}{sm}.{sy} - {ed}{em}.{ey}","m":"{sd}{sm} - {ed}{em} {sy}","l":"{sd} {sm} - {ed} {em} {sy}","f":"{sd} {sm} - {ed} {em} {sy}"},"c12":{"s":"{sd}{sm}.{sy} - {ed}{em}.{ey}","m":"{sd}{sm}.{sy} - {ed}{em}.{ey}","l":"{sd} {sm} {sy} - {ed} {em} {ey}","f":"{sd} {sm} {sy} - {ed} {em} {ey}"},"c20":{"s":"{sm}.{sy} - {em}.{ey}","m":"{sm}.{sy} - {em}.{ey}","l":"{sm} {sy} - {em} {ey}","f":"{sm} {sy} - {em} {ey}"},"c30":"{sy} - {ey}"}}};
ilib.data.dateformats_fr = {"gregorian":{"order":"{time} {date}","date":{"dmwy":{"s":"EE d/MM/yy","m":"EE d/MM/yyyy","l":"EEE d MMM yyyy","f":"EEEE d MMMM yyyy"},"dmy":{"s":"d/MM/yy","m":"d/MM/yyyy","l":"d MMM yyyy","f":"d MMMM yyyy"},"dmw":{"s":"EE d/MM","m":"EE d/MM","l":"EEE d MMM","f":"EEEE d MMMM"},"dm":{"s":"d/MM","m":"d/MM","l":"d MMM","f":"d MMMM"},"my":{"s":"MM/yy","m":"MM/yyyy","l":"MMM yyyy","f":"MMMM yyyy"},"d":"dd","m":{"s":"MM","m":"MM","l":"MMM","f":"MMMM"},"y":{"s":"yy","m":"yyyy","l":"yyyy","f":"yyyy"},"n":{"s":"N","m":"NN","l":"MMM","f":"MMMM"}},"time":{"12":{"ahmsz":"hh:mm:ss a z","ahms":"hh:mm:ss a","hmsz":"hh:mm:ss z","hms":"hh:mm:ss","ahmz":"hh:mm a z","ahm":"hh:mm a","hmz":"hh:mm z","ah":"hh a","hm":"hh:mm","h":"hh"},"24":{"ahmsz":"HH:mm:ss z","ahms":"HH:mm:ss","hmsz":"HH:mm:ss z","hms":"HH:mm:ss","ahmz":"HH:mm z","ahm":"HH:mm","hmz":"HH:mm z","ah":"HH","hm":"HH:mm","h":"HH"}},"range":{"c00":{"s":"{st} - {et} {sd}/{sm}/{sy}","m":"{st} - {et} {sd}/{sm}/{sy}","l":"{st} - {et} {sd} {sm} {sy}","f":"{st} - {et} {sd} {sm} {sy}"},"c01":{"s":"{st} {sd}/{sm} - {et} {ed}/{em}/{ey}","m":"{st} {sd}/{sm} - {et} {ed}/{em}/{sy}","l":"{st} {sd} {sm} - {et} {ed} {em} {sy}","f":"{st} {sd} {sm} - {et} {ed} {em} {sy}"},"c02":{"s":"{st} {sd}/{sm} - {et} {ed}/{em}/{ey}","m":"{st} {sd}/{sm} - {et} {ed}/{em}/{sy}","l":"{st} {sd} {sm} - {et} {ed} {em} {sy}","f":"{st} {sd} {sm} - {et} {ed} {em} {sy}"},"c03":{"s":"{st} {sd}/{sm}/{sy} - {et} {ed}/{em}/{ey}","m":"{st} {sd}/{sm}/{sy} - {et} {ed}/{em}/{ey}","l":"{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}","f":"{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}"},"c10":{"s":"{sd}/{sm}/{sy} - {ed}/{em}/{ey}","m":"{sd}/{sm}/{sy} - {ed}/{em}/{ey}","l":"{sd}-{ed} {sm} {sy}","f":"{sd}-{ed} {sm} {sy}"},"c11":{"s":"{sd}/{sm} - {ed}/{em}/{ey}","m":"{sd}/{sm} - {ed}/{em}/{sy}","l":"{sd} {sm} - {ed} {em} {sy}","f":"{sd} {sm} - {ed} {em} {sy}"},"c12":{"s":"{sd}/{sm}/{sy} - {ed}/{em}/{ey}","m":"{sd}/{sm}/{sy} - {ed}/{em}/{ey}","l":"{sd} {sm} {sy} - {ed} {em} {ey}","f":"{sd} {sm} {sy} - {ed} {em} {ey}"},"c20":{"s":"{sm}/{sy} - {em}/{ey}","m":"{sm}/{sy} - {em}/{ey}","l":"{sm} {sy} - {em} {ey}","f":"{sm} {sy} - {em} {ey}"},"c30":"{sy} - {ey}"}}};
ilib.data.dateformats_zh = {"gregorian":{"order":{"s":"{date} {time}","m":"{date} {time}","l":"{date}{time}","f":"{date}{time}"},"date":{"dmwy":{"s":"yy-MM-dd(E)","m":"yyyy-MM-dd(EE)","l":"yyyy年MMM月d日(EEE)","f":"yyyy年MMMM月d日(EEEE)"},"dmy":{"s":"yy-MM-dd","m":"yyyy-MM-dd","l":"yyyy年MMM月d日","f":"yyyy年MMMM月d日"},"dmw":{"s":"MM-dd(E)","m":"MM-dd(EE)","l":"MMM月d日(EEE)","f":"MMMM月d日(EEEE)"},"dm":{"s":"MM-dd","m":"MM-dd","l":"MMM月d日","f":"MMMM月d日"},"my":{"s":"yy-MM","m":"yyyy-MM","l":"yyyy年MMM月","f":"yyyy年MMMM月"},"dw":{"s":"d日(E)","m":"d日(EE)","l":"d日(EEE)","f":"d日(EEEE)"},"d":{"s":"d","m":"dd","l":"d日","f":"d日"},"m":{"s":"M","m":"MM","l":"MMM月","f":"MMMM月"},"y":{"s":"yy","m":"yyyy","l":"yyyy年","f":"yyyy年"},"n":{"s":"N","m":"NN","l":"MMM月","f":"MMMM月"}},"time":{"12":{"ahmsz":"ahh:mm:ssz","ahms":"ahh:mm:ss","hmsz":"hh:mm:ssz","hms":"hh:mm:ss","ahmz":"ahh:mmz","ahm":"ahh:mm","hmz":"hh:mmz","ah":"ahh","hm":"hh:mm","h":"hh"},"24":{"ahmsz":"HH:mm:ssz","ahms":"HH:mm:ss","hmsz":"HH:mm:ssz","hms":"HH:mm:ss","ahmz":"HH:mmz","ahm":"HH:mm","hmz":"HH:mmz","ah":"HH","hm":"HH:mm","h":"HH"}},"range":{"c00":{"s":"{sy}-{sm}-{sd}，{st}至{et}","m":"{sy}-{sm}-{sd}，{st}至{et}","l":"{sy}{sm}{sd}，{st}至{et}","f":"{sy}{sm}{sd}，{st}至{et}"},"c01":{"s":"{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}","m":"{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}","l":"{sy}{sm}{sd}{st}至{ed}{et}","f":"{sy}{sm}{sd}{st}至{ed}{et}"},"c02":{"s":"{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}","m":"{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}","l":"{sy}{sm}{sd}，{st}至{em}{ed}日，{et}","f":"{sy}{sm}{sd}，{st}至{em}{ed}日，{et}"},"c03":{"s":"{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}","m":"{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}","l":"{sy}{sm}{sd}，{st}至{ey}{em}{ed}，{et}","f":"{sy}{sm}{sd}，{st}至{ey}{em}{ed}，{et}"},"c10":{"s":"{sy}-{sm}-{sd}至{ed}","m":"{sy}-{sm}-{sd}至{ed}","l":"{sy}{sm}{sd}至{ed}","f":"{sy}{sm}{sd}至{ed}"},"c11":{"s":"{sy}-{sm}-{sd}至{em}-{ed}","m":"{sy}-{sm}-{sd}至{em}-{ed}","l":"{sy}{sm}{sd}至{em}{ed}","f":"{sy}{sm}{sd}至{em}{ed}"},"c12":{"s":"{sy}-{sm}-{sd}至{ey}-{em}-{ed}","m":"{sy}-{sm}-{sd}至{ey}-{em}-{ed}","l":"{sy}{sm}{sd}至{ey}{em}{ed}","f":"{sy}{sm}{sd}至{ey}{em}{ed}"},"c20":{"s":"{sy}-{sm}至{ey}-{em}","m":"{sy}-{sm}至{ey}-{em}","l":"{sy}{sm}至{ey}{em}","f":"{sy}{sm}至{ey}{em}"},"c30":"{sy}至{ey}"}}};
ilib.data.dateformats_zh_TW = {"gregorian":{"date":{"dmwy":{"s":"yyyy-MM-dd(E)","l":"yyyy年MMM月d日(EEE)"},"dmy":{"s":"yyyy-MM-dd","l":"yyyy年MMM月d日"},"my":{"s":"yyyy-MM","l":"yyyy年MMM月"},"y":{"s":"yyyy","l":"yyyy年"}}}};

ilib.data.sysres = {"MMMM1":"January","MMM1":"Jan","NN1":"Ja","N1":"J","MMMM2":"February","MMM2":"Feb","NN2":"Fe","N2":"F","MMMM3":"March","MMM3":"Mar","NN3":"Ma","N3":"M","MMMM4":"April","MMM4":"Apr","NN4":"Ap","N4":"A","MMMM5":"May","MMM5":"May","NN5":"Ma","N5":"M","MMMM6":"June","MMM6":"Jun","NN6":"Ju","N6":"J","MMMM7":"July","MMM7":"Jul","NN7":"Ju","N7":"J","MMMM8":"August","MMM8":"Aug","NN8":"Au","N8":"A","MMMM9":"September","MMM9":"Sep","NN9":"Se","N9":"S","MMMM10":"October","MMM10":"Oct","NN10":"Oc","N10":"O","MMMM11":"November","MMM11":"Nov","NN11":"No","N11":"N","MMMM12":"December","MMM12":"Dec","NN12":"De","N12":"D","EEEE0":"Sunday","EEE0":"Sun","EE0":"Su","E0":"S","EEEE1":"Monday","EEE1":"Mon","EE1":"Mo","E1":"M","EEEE2":"Tuesday","EEE2":"Tue","EE2":"Tu","E2":"T","EEEE3":"Wednesday","EEE3":"Wed","EE3":"We","E3":"W","EEEE4":"Thursday","EEE4":"Thu","EE4":"Th","E4":"T","EEEE5":"Friday","EEE5":"Fri","EE5":"Fr","E5":"F","EEEE6":"Saturday","EEE6":"Sat","EE6":"Sa","E6":"S","ordinalChoice":"1#1st|2#2nd|3#3rd|21#21st|22#22nd|23#23rd|31#31st|#{num}th","a0":"AM","a1":"PM","G-1":"BCE","G1":"CE","separatorFull":", ","finalSeparatorFull":", and ","separatorShort":" ","separatorMedium":" ","separatorLong":", ","N1-hebrew":"N","N2-hebrew":"I","N3-hebrew":"S","N4-hebrew":"T","N5-hebrew":"A","N6-hebrew":"E","N7-hebrew":"T","N8-hebrew":"Ḥ","N9-hebrew":"K","N10-hebrew":"T","N11-hebrew":"S","N12-hebrew":"A","N13-hebrew":"A","NN1-hebrew":"Ni","NN2-hebrew":"Iy","NN3-hebrew":"Si","NN4-hebrew":"Ta","NN5-hebrew":"Av","NN6-hebrew":"El","NN7-hebrew":"Ti","NN8-hebrew":"Ḥe","NN9-hebrew":"Ki","NN10-hebrew":"Te","NN11-hebrew":"Sh","NN12-hebrew":"Ad","NN13-hebrew":"A2","MMM1-hebrew":"Nis","MMM2-hebrew":"Iyy","MMM3-hebrew":"Siv","MMM4-hebrew":"Tam","MMM5-hebrew":"Av","MMM6-hebrew":"Elu","MMM7-hebrew":"Tis","MMM8-hebrew":"Ḥes","MMM9-hebrew":"Kis","MMM10-hebrew":"Tev","MMM11-hebrew":"She","MMM12-hebrew":"Ada","MMM13-hebrew":"Ad2","MMMM1-hebrew":"Nisan","MMMM2-hebrew":"Iyyar","MMMM3-hebrew":"Sivan","MMMM4-hebrew":"Tammuz","MMMM5-hebrew":"Av","MMMM6-hebrew":"Elul","MMMM7-hebrew":"Tishri","MMMM8-hebrew":"Ḥeshvan","MMMM9-hebrew":"Kislev","MMMM10-hebrew":"Teveth","MMMM11-hebrew":"Shevat","MMMM12-hebrew":"Adar","MMMM13-hebrew":"Adar II","E0-hebrew":"R","E1-hebrew":"S","E2-hebrew":"S","E3-hebrew":"R","E4-hebrew":"Ḥ","E5-hebrew":"S","E6-hebrew":"S","EE0-hebrew":"ri","EE1-hebrew":"se","EE2-hebrew":"sl","EE3-hebrew":"rv","EE4-hebrew":"ḥa","EE5-hebrew":"si","EE6-hebrew":"sa","EEE0-hebrew":"ris","EEE1-hebrew":"she","EEE2-hebrew":"shl","EEE3-hebrew":"rvi","EEE4-hebrew":"ḥam","EEE5-hebrew":"shi","EEE6-hebrew":"sha","EEEE0-hebrew":"yom rishon","EEEE1-hebrew":"yom sheni","EEEE2-hebrew":"yom shlishi","EEEE3-hebrew":"yom r'vi‘i","EEEE4-hebrew":"yom ḥamishi","EEEE5-hebrew":"yom shishi","EEEE6-hebrew":"yom shabbat","N1-islamic":"M","N2-islamic":"Ṣ","N3-islamic":"R","N4-islamic":"R","N5-islamic":"J","N6-islamic":"J","N7-islamic":"R","N8-islamic":"Š","N9-islamic":"R","N10-islamic":"Š","N11-islamic":"Q","N12-islamic":"Ḥ","NN1-islamic":"Mu","NN2-islamic":"Ṣa","NN3-islamic":"Rb","NN4-islamic":"R2","NN5-islamic":"Ju","NN6-islamic":"J2","NN7-islamic":"Ra","NN8-islamic":"Šh","NN9-islamic":"Ra","NN10-islamic":"Ša","NN11-islamic":"Qa","NN12-islamic":"Ḥi","MMM1-islamic":"Muḥ","MMM2-islamic":"Ṣaf","MMM3-islamic":"Rab","MMM4-islamic":"Ra2","MMM5-islamic":"Jum","MMM6-islamic":"Ju2","MMM7-islamic":"Raj","MMM8-islamic":"Šha","MMM9-islamic":"Ram","MMM10-islamic":"Šaw","MMM11-islamic":"Qad","MMM12-islamic":"Ḥij","MMMM1-islamic":"Muḥarram","MMMM2-islamic":"Ṣafar","MMMM3-islamic":"Rabī‘ I","MMMM4-islamic":"Rabī‘ II","MMMM5-islamic":"Jumādā I","MMMM6-islamic":"Jumādā II","MMMM7-islamic":"Rajab","MMMM8-islamic":"Šha'bān","MMMM9-islamic":"Ramaḍān","MMMM10-islamic":"Šawwāl","MMMM11-islamic":"Ḏu al-Qa‘da","MMMM12-islamic":"Ḏu al-Ḥijja","E0-islamic":"A","E1-islamic":"I","E2-islamic":"T","E3-islamic":"A","E4-islamic":"K","E5-islamic":"J","E6-islamic":"S","EE0-islamic":"ah","EE1-islamic":"it","EE2-islamic":"th","EE3-islamic":"ar","EE4-islamic":"kh","EE5-islamic":"ju","EE6-islamic":"sa","EEE0-islamic":"aha","EEE1-islamic":"ith","EEE2-islamic":"tha","EEE3-islamic":"arb","EEE4-islamic":"kha","EEE5-islamic":"jum","EEE6-islamic":"sab","EEEE0-islamic":"yawn al-ahad","EEEE1-islamic":"yawn al-ithnaya","EEEE2-islamic":"yawn uth-thalathaa","EEEE3-islamic":"yawn al-arba‘a","EEEE4-islamic":"yawn al-khamis","EEEE5-islamic":"yawn al-jum‘a","EEEE6-islamic":"yawn as-sabt"};
ilib.data.sysres_en = {};
ilib.data.sysres_en_US = {"a0":"am","a1":"pm","G-1":"BC","G1":"AD","finalSeparatorFull":" and "};
ilib.data.sysres_de = {"MMMM1":"Januar","MMM1":"Jan.","MMMM2":"Februar","MMM2":"Feb.","MMMM3":"März","MMM3":"Mär.","NN3":"Mä","MMM4":"Apr.","MMMM5":"Mai","MMM5":"Mai","MMMM6":"Juni","MMM6":"Jun.","MMMM7":"Juli","MMM7":"Jul.","MMM8":"Aug.","MMM9":"Sep.","MMMM10":"Oktober","MMM10":"Okt.","NN10":"Ok","MMM11":"Nov.","MMMM12":"Dezember","MMM12":"Dez.","EEEE0":"Sonntag","EEE0":"So.","EE0":"So","EEEE1":"Montag","EEE1":"Mo.","EEEE2":"Dienstag","EEE2":"Di.","EE2":"Di","E2":"D","EEEE3":"Mittwoch","EEE3":"Mi.","EE3":"Mi","E3":"M","EEEE4":"Donnerstag","EEE4":"Do.","EE4":"Do","E4":"D","EEEE5":"Freitag","EEE5":"Fr.","EEEE6":"Samstag","EEE6":"Sa.","ordinalChoice":"#{num}.","a0":"vorm.","a1":"nachm.","G-1":"v. Chr.","G1":"n. Chr.","durationShortMillis":"#{num}Ms","#{num}s":"#{num}S","durationShortMinutes":"#{num}M","#{num}h":"#{num}St","#{num}d":"#{num}T","#{num}w":"#{num}W","durationShortMonths":"#{num}Mo","#{num}y":"#{num}J","#{num} ms":"#{num} Ms.","1#1 se|#{num} sec":"#{num} Se.","1#1 mi|#{num} min":"#{num} Mi.","durationMediumHours":"#{num} St.","1#1 dy|#{num} dys":"#{num} Ta.","durationMediumWeeks":"#{num} Wo.","1#1 mo|#{num} mos":"#{num} Mo.","durationMediumYears":"#{num} Ja.","1#1 sec|#{num} sec":"#{num} Sek.","1#1 min|#{num} min":"#{num} Min.","1#1 hr|#{num} hrs":"#{num} Std.","durationLongDays":"1#{num} Tag|#{num} Tage","1#1 wk|#{num} wks":"#{num} Wch.","1#1 mon|#{num} mons":"#{num} Mon.","1#1 yr|#{num} yrs":"#{num} Jhr.","1#1 millisecond|#{num} milliseconds":"1#{num} Millisekunde|#{num} Millisekunden","1#1 second|#{num} seconds":"1#{num} Sekunde|#{num} Sekunden","1#1 minute|#{num} minutes":"1#{num} Minute|#{num} Minuten","1#1 hour|#{num} hours":"1#{num} Stunde|#{num} Stunden","1#1 day|#{num} days":"1#{num} Tag|#{num} Tage","1#1 week|#{num} weeks":"1#{num} Woche|#{num} Wochen","1#1 month|#{num} months":"1#{num} Monat|#{num} Monate","1#1 year|#{num} years":"1#{num} Jahr|#{num} Jahre","{duration} ago":"vor {duration}","in {duration}":"in {duration}","separatorShort":" ","separatorMedium":" ","separatorLong":", ","separatorFull":", ","finalSeparatorFull":" und "};
ilib.data.sysres_fr = {"MMMM1":"janvier","MMM1":"janv","NN1":"ja","MMMM2":"février","MMM2":"févr","NN2":"fé","MMMM3":"mars","MMM3":"mars","NN3":"ma","MMMM4":"avril","MMM4":"avr","NN4":"av","MMMM5":"mai","MMM5":"mai","NN5":"ma","MMMM6":"juin","MMM6":"juin","NN6":"ju","MMMM7":"juillet","MMM7":"juil","NN7":"ju","MMMM8":"août","MMM8":"août","NN8":"ao","MMMM9":"septembre","MMM9":"sept","NN9":"se","MMMM10":"octobre","MMM10":"oct","NN10":"oc","MMMM11":"novembre","MMM11":"nov","NN11":"no","MMMM12":"décembre","MMM12":"déc","NN12":"dé","EEEE0":"dimanche","EEE0":"dim.","EE0":"di","E0":"D","EEEE1":"lundi","EEE1":"lun.","EE1":"lu","E1":"L","EEEE2":"mardi","EEE2":"mar.","EE2":"ma","E2":"M","EEEE3":"mercredi","EEE3":"mer.","EE3":"me","E3":"M","EEEE4":"jeudi","EEE4":"jeu.","EE4":"je","E4":"J","EEEE5":"vendredi","EEE5":"ven.","EE5":"ve","E5":"V","EEEE6":"samedi","EEE6":"sam.","EE6":"sa","ordinalChoice":"1#1er|#{num}e","a0":"matin","a1":"soir","G-1":"av. J.-C.","G1":"ap. J.-C.","durationShortMillis":"#{num}ms","#{num}s":"#{num}s","durationShortMinutes":"#{num}m","#{num}h":"#{num}h","#{num}d":"#{num}j","#{num}w":"#{num}sm","durationShortMonths":"#{num}mo","#{num}y":"#{num}a","#{num} ms":"#{num} Ms","1#1 se|#{num} sec":"1#{num} se|#{num} ses","1#1 mi|#{num} min":"1#{num} mn|#{num} mns","durationMediumHours":"1#{num} hr|#{num} hrs","1#1 dy|#{num} dys":"1#{num} jr|#{num} jrs","durationMediumWeeks":"1#{num} sm|#{num} sms","1#1 mo|#{num} mos":"1#{num} mo|#{num} mos","durationMediumYears":"1#{num} an|#{num} ans","1#1 sec|#{num} sec":"1#{num} sec|#{num} secs","1#1 min|#{num} min":"1#{num} min|#{num} mins","1#1 hr|#{num} hrs":"1#{num} hr|#{num} hrs","durationLongDays":"1#{num} jr|#{num} jrs","1#1 wk|#{num} wks":"1#{num} sem|#{num} sems","1#1 mon|#{num} mons":"1#{num} mois|#{num} mois","1#1 yr|#{num} yrs":"1#{num} an|#{num} ans","1#1 millisecond|#{num} milliseconds":"1#{num} milliseconde|#{num} millisecondes","1#1 second|#{num} seconds":"1#{num} seconde|#{num} secondes","1#1 minute|#{num} minutes":"1#{num} minute|#{num} minutes","1#1 hour|#{num} hours":"1#{num} heure|#{num} heures","1#1 day|#{num} days":"1#{num} jour|#{num} jours","1#1 week|#{num} weeks":"1#{num} semaine|#{num} semaines","1#1 month|#{num} months":"#{num} mois","1#1 year|#{num} years":"1#{num} an|#{num} ans","{duration} ago":"il y a {duration}","in {duration}":"dans {duration}","separatorShort":" ","separatorMedium":" ","separatorLong":" ","separatorFull":", ","finalSeparatorFull":" et "};
ilib.data.sysres_zh = {"MMMM1":"1","MMM1":"1","NN1":"01","N1":"1","MMMM2":"2","MMM2":"2","NN2":"02","N2":"2","MMMM3":"3","MMM3":"3","NN3":"03","N3":"3","MMMM4":"4","MMM4":"4","NN4":"04","N4":"4","MMMM5":"5","MMM5":"5","NN5":"05","N5":"5","MMMM6":"6","MMM6":"6","NN6":"06","N6":"6","MMMM7":"7","MMM7":"7","NN7":"07","N7":"7","MMMM8":"8","MMM8":"8","NN8":"08","N8":"8","MMMM9":"9","MMM9":"9","NN9":"09","N9":"9","MMMM10":"10","MMM10":"10","NN10":"10","N10":"1O","MMMM11":"11","MMM11":"11","NN11":"11","N11":"11","MMMM12":"12","MMM12":"12","NN12":"12","N12":"12","EEEE0":"星期日","EEE0":"周日","EE0":"周日","E0":"日","EEEE1":"星期一","EEE1":"周一","EE1":"周一","E1":"一","EEEE2":"星期二","EEE2":"周二","EE2":"周二","E2":"二","EEEE3":"星期三","EEE3":"周三","EE3":"周三","E3":"三","EEEE4":"星期四","EEE4":"周四","EE4":"周四","E4":"四","EEEE5":"星期五","EEE5":"周五","EE5":"周五","E5":"五","EEEE6":"星期六","EEE6":"周六","EE6":"周六","E6":"六","ordinalChoice":"#{num}天","azh0":"凌晨","azh1":"早上","azh2":"上午","azh3":"中午","azh4":"下午","azh5":"傍晚","azh6":"晚上","G-1":"公元前","G1":"公元","durationShortMillis":"#{num}毫秒","#{num}s":"#{num}秒","durationShortMinutes":"#{num}分钟","#{num}h":"#{num}小时","#{num}d":"#{num}天","#{num}w":"#{num}周","durationShortMonths":"#{num}个月","#{num}y":"#{num}年","#{num} ms":"#{num}毫秒","1#1 se|#{num} sec":"#{num}秒","1#1 mi|#{num} min":"#{num}分钟","durationMediumHours":"#{num}小时","1#1 dy|#{num} dys":"#{num}天","durationMediumWeeks":"#{num}周","1#1 mo|#{num} mos":"#{num}个月","durationMediumYears":"#{num}年","1#1 sec|#{num} sec":"#{num}秒","1#1 min|#{num} min":"#{num}分钟","1#1 hr|#{num} hrs":"#{num}小时","durationLongDays":"#{num}天","1#1 wk|#{num} wks":"#{num}周","1#1 mon|#{num} mons":"#{num}个月","1#1 yr|#{num} yrs":"#{num}年","1#1 millisecond|#{num} milliseconds":"#{num}毫秒","1#1 second|#{num} seconds":"#{num}秒","1#1 minute|#{num} minutes":"#{num}分钟","1#1 hour|#{num} hours":"#{num}小时","1#1 day|#{num} days":"#{num}天","1#1 week|#{num} weeks":"#{num}周","1#1 month|#{num} months":"#{num}个月","1#1 year|#{num} years":"#{num}年","{duration} ago":"{duration}前","in {duration}":"{duration}后","separatorShort":"","separatorMedium":"","separatorLong":"、","separatorFull":"、","finalSeparatorFull":"和"};
ilib.data.sysres_zh_TW = {"EEE0":"週日","EE0":"週日","E0":"週日","EEE1":"週一","EE1":"週一","E1":"週一","EEE2":"週二","EE2":"週二","E2":"週二","EEE3":"週三","EE3":"週三","E3":"週三","EEE4":"週四","EE4":"週四","E4":"週四","EEE5":"週五","EE5":"週五","E5":"週五","EEE6":"週六","EE6":"週六","E6":"週六","azh3":"正午","durationShortMinutes":"#{num}分鐘","#{num}h":"#{num}小時","#{num}w":"#{num}週","durationShortMonths":"#{num}個月","1#1 mi|#{num} min":"#{num}分鐘","durationMediumHours":"#{num}小時","1#1 wk|#{num} wks":"#{num}週","1#1 mo|#{num} mos":"#{num}個月","1#1 min|#{num} min":"#{num}分鐘","1#1 hr|#{num} hrs":"#{num}小時","1#1 mon|#{num} mons":"#{num}個月","1#1 minute|#{num} minutes":"#{num}分鐘","1#1 hour|#{num} hours":"#{num}小時","1#1 week|#{num} weeks":"#{num}週","1#1 month|#{num} months":"#{num}個月"};

function testDateFmtConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "DateFmt-assembled-empty-initial",
		fn: function () {
		    var fmt = new ilib.DateFmt();
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testDateFmtConstructorRealInitial(results) {
	var tt = new TimedTest({
		name: "DateFmt-assembled-normal-initial",
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "de-DE"
			});
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testDateFmtConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "DateFmt-assembled-nonexistent-initial",
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "xx-YY"
			});
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testDateFmtConstructorOtherComplexInitial(results) {
	var tt = new TimedTest({
		name: "DateFmt-assembled-otherfile-complex-initial",
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "zh-Hant-TW"
			});
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testDateFmtConstructorWithOptionsInitial(results) {
	var tt = new TimedTest({
		name: "DateFmt-assembled-otherfile-options-initial",
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "fr-FR",
				type: "datetime",
				date: "dmywg",
				time: "hmsaz",
				length: "full"
			});
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testDateFmtFormatInitial(results) {
	var fmt = new ilib.DateFmt({
		locale: "fr-FR",
		type: "datetime",
		date: "dmywg",
		time: "hmsaz",
		length: "full"
	});

	assertNotNull(fmt);

	var tt = new TimedTest({
		name: "DateFmt-assembled-format-full-initial",
		fn: function () {
			d = ilib.Date.newInstance();
			assertNotUndefined(fmt.format(d));
		}
	});

	tt.run(results);
}
