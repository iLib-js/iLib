/*
 * datefmts.js - auxillary tools used to generate the dateformats.json files
 *
 * Copyright © 2015, JEDLSoft
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
/*
 * This code is intended to be run under node.js
 */
var fs = require('fs');
var util = require('util');
var path = require('path');

var common = require('./common.js');
var merge = common.merge;
var Locale = common.Locale;
var makeDirs = common.makeDirs;

var rtlLanguages = [
    "ae",
    "arc",
    "ar",
    "az",
    "bal",
    "bej",
    "bft",
    "cja",
    "ckb",
    "cop",
    "doi",
    "dv",
    "dyo",
    "emk",
    "fa",
    "gba",
    "grc",
    "ha",
    "he",
    "jpr",
    "jrb",
    "ks",
    "ky",
    "lad",
    "lah",
    "lki",
    "myz",
    "nqo",
    "otk",
    "pal",
    "phn",
    "prd",
    "ps",
    "sam",
    "sdh",
    "sd",
    "swb",
    "syr",
    "tg",
    "tk",
    "ug",
    "ur",
    "uz",
    "xld",
    "xpr",
    "xsa",
    "yi",
    "zza"
];

var rtlScripts = [
    "Arab",
    "Armi",
    "Avst",
    "Cprt",
    "Hebr",
    "Khar",
    "Lydi",
    "Mand",
    "Merc",
    "Mero",
    "Nkoo",
    "Orkh",
    "Phli",
    "Phnx",
    "Prti",
    "Samr",
    "Sarb",
    "Syrc",
    "Thaa",
];

var asianLangs = [
    "ko",
    "zh",
    "ja"
];

function loadFile(path) {
    var ret = undefined;
    if (fs.existsSync(path)) {
        json = fs.readFileSync(path, "utf-8");
        /* before parsing, first remove comments which are not valid in real json
         *
         * note. eu/dateFields.json, eu-ES/dateFields.json. 
         * There're "displayName": "AM//PM" value. which shouldn't be removed".
        */
        json = json.replace(/\/\*(\*[^\/]|[^\*])*\*\//g, "");
        ret = JSON.parse(json);
    }
    return ret;
}

function addDateFormat(formats, locale, data) {
    if (!locale) {
        // root
        formats.data = data;
        return;
    }
    
    var language = locale.getLanguage(),
        script = locale.getScript(),
        region = locale.getRegion();
    
    if (language) {
        if (!formats[language]) formats[language] = {};
        if (script) {
            if (!formats[language][script]) formats[language][script] = {};
            if (region) {
                formats[language][script][region] = {data: data};
            } else {
                formats[language][script].data = data;
            }
        } else if (region) {
            formats[language][region] = {data: data};
        } else {
            formats[language].data = data;
        }
    }
}

function getFormatGroup(formats, localeComponents) {
    var group = formats;
    for (var i = 0; i < localeComponents.length; i++) {
        if (!group[localeComponents[i]]) group[localeComponents[i]] = {};
        group = group[localeComponents[i]];
    }
    return group;
}

function convertOrderFormat(fmt) {
    return fmt.replace(/\{0\}/, "{time}").replace(/\{1\}/, "{date}");
}

function correctedYear(fmt) {
    ret = "";
    var i = 0;
    var skipMode = false;
    while (i < fmt.length) {
        if (fmt.charAt(i) === "'") {
            skipMode = !skipMode;
        } else if (!skipMode) {
            var c = fmt.charAt(i),
                start = i; 
            while (c === 'y' && i < fmt.length) {
                c = fmt.charAt(++i);
            }
            if (i - start > 0) {
                ret += (i - start > 1) ? "yy" : "yyyy";
            }
        }
        ret += fmt.charAt(i++);
    }
    return ret;
}

function dateOrder(fmt) {
    var stripped = fmt.replace(/'[^']*'/g, "");
    if (stripped.match(/d.*M.*y/)) {
        return "dmy";
    } else if (stripped.match(/M.*d.*y/)) {
        return "mdy";
    } else if (stripped.match(/y.*M.*d/)) {
        return "ymd";
    } else if (stripped.match(/y.*d.*M/)) {
        return "ydm";
    } else {
        util.print("WARNING: unknown date order: " + fmt + "\n");
    }
}

function dateOrder2(fmt) {
    var stripped = fmt.replace(/'[^']*'/g, "");
    if (stripped.match(/[Ec].*M.*d/)) {
        return "wmd";
    } else if (stripped.match(/d.*M.*[Ec]/)) {
        return "dmw";
    } else if (stripped.match(/[Ec].*d.*M/)) {
        return "wdm";
    } else if (stripped.match(/M.*d.*[Ec]/)) {
        return "mdw";
    } else {
        util.print("WARNING: unknown date order: " + fmt + "\n");
    }
}

function timeOrder(fmt) {
    var stripped = fmt.replace(/'[^']*'/g, "");
    if (stripped.match(/H.*z/) || stripped.match(/h.*a.*z/)) {
        return "haz";
    } else if (stripped.match(/z.*H/) || stripped.match(/z.*a.*h/)) {
        return "zah";
    } else if (stripped.match(/a.*h/)) {
        return "ahz";
    } else if (stripped.match(/h.*a/)) {
        return "haz";
    } else {
        util.print("WARNING: unknown time order: " + fmt + "\n");
    }
}

function getDateFormat(calendar, length) {
    var ret = "";
    if (calendar.dateFormats && calendar.dateFormats[length]) {
        ret = typeof(calendar.dateFormats[length]) === "string" ? calendar.dateFormats[length] : calendar.dateFormats[length]._value;
        ret = ret ? ret.replace(/ *G+/, "") : ret;
    }
    return ret;
}

function getTimeFormat(calendar, length) {
    var ret = "";
    if (calendar.timeFormats && calendar.timeFormats[length]) {
        ret = typeof(calendar.timeFormats[length]) === "string" ? calendar.timeFormats[length] : calendar.timeFormats[length]._value;
    }
    return ret;
}

function getAvailableFormat(calendar, code) {
    var ret = "";
    if (calendar.dateTimeFormats && calendar.dateTimeFormats.availableFormats && calendar.dateTimeFormats.availableFormats[code]) {
        ret = calendar.dateTimeFormats.availableFormats[code];
        ret = ret ? ret.replace(/ *G+/, "") : ret;
    }
    return ret;
}

function isAsianLang(lang) {
    return asianLangs.indexOf(lang) > -1;
}

/**
 * Return the index of the first occurrence of a character from set
 * in the string that is not inside of quotes.
 * 
 * @param string
 * @param set
 * @returns {Number} the index of the first character that matches, or -1
 * if no characters match
 */
function scanForChars(string, set) {
    var i = 0;
    var skipMode = false;
    while (i < string.length) {
        if (string.charAt(i) === "'") {
            skipMode = !skipMode;
        } else if (!skipMode) {
            if (set.indexOf(string.charAt(i)) > -1) {
                return i;
            }
        }
        i++;
    }
    return -1;
}

/**
 * Return the index of one past the last occurrence of a character from set
 * in the string that is not inside of quotes. 
 * 
 * @param string
 * @param set
 * @returns {Number} the index of the first character that matches, or -1
 * if no characters match
 */
function scanForLastChars(string, set) {
    var i = string.length - 1;
    var skipMode = false;
    while (i < string.length) {
        if (string.charAt(i) === "'") {
            skipMode = !skipMode;
        } else if (!skipMode) {
            if (set.indexOf(string.charAt(i)) > -1) {
                return i+1;
            }
        }
        i--;
    }
    return -1;
}

/**
 * Determine whether or not this locale distinguishes between stand-alone month or day-of-week 
 * names and in-format month or day-of-week names. The stand-alone months are typically used
 * when combined with the date. eg. The in-format format for "5th of November" would have 
 * "November" written in the genitive case, where as "November" at the top of a calendar would
 * be written in in the nominative case.
 * 
 * @param calendar
 * @returns {Boolean}
 */
function standAlone(calendar) {
    var monthNamesFormat = calendar.months.format.wide,
        monthNamesStandAlone = calendar.months["stand-alone"].wide;

    for (var month in monthNamesFormat) {
        if (    month && 
                monthNamesFormat[month] && 
                monthNamesStandAlone[month] && 
                monthNamesFormat[month] !== monthNamesStandAlone[month]) {
            return true;
        } 
    }
    return false;
}

/**
 * Compare the non-date component parts of formats to see if they
 * are different.
 * 
 * @param left first format to test
 * @param right second format to test
 * @returns {Boolean} true if the two formats are different, false otherwise
 */
function compareFormats(left, right) {
    var l = left.replace(/[dMy]+/, ""),
        r = right.replace(/[dMy]+/, "");
    
    return l !== r;
}

module.exports = {
    loadFile: loadFile,
    getFormatGroup: getFormatGroup,

    walkLocaleDir: function (formats, filename, root, dir) {
        var results = [];
        var list = fs.readdirSync(path.join(root, dir));
        var localeSpec = dir.replace(/\//g, '-');
        var locale = dir ? new Locale(localeSpec) : undefined;
        
        list.forEach(function (file) {
            var sourcePathRelative = path.join(dir, file);
            var sourcePath = path.join(root, sourcePathRelative);
            var stat = fs.statSync(sourcePath);
            if (stat && stat.isDirectory()) {
                module.exports.walkLocaleDir(formats, filename, root, sourcePathRelative);
            } else {
                var obj;
                if (file.match(filename)) {
                    try {
                        obj = loadFile(sourcePath);
                        if (obj) {
                            util.print(dir + " ");
                            
                            addDateFormat(formats, locale, obj);
                        }
                    } catch (err) {
                        util.print("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
                        util.print(err + "\n");
                        process.exit(2);
                    }
                }
            }
        });
    
        return results;
    },

    mergeFormats: function(formats, group, localeComponents) {
        if (localeComponents.length) {
            var parent = getFormatGroup(formats, localeComponents.slice(0, -1)); 
            if (group.data) group.data.generated = undefined;
            group.data = merge(parent.data || {}, group.data || {});
        }
        
        for (var comp in group) {
            if (comp && comp !== "data") {
                module.exports.mergeFormats(formats, group[comp], localeComponents.concat([comp]));
            }
        }
    },

    createDateFormats: function (language, script, cldrData) {
        var formats = {},
            cldrCalendar,
            calendar,
            isRtl = (rtlLanguages.indexOf(language) > -1) && (!script || rtlScripts.indexOf(script) > 0);
            rtlify = isRtl ? function(format) {
                var f = format.replace(/\u200F/g, "");
                
                switch(f.charAt(0)) {
                    case 'd':
                    case 'y':
                    case 'h':
                    case 'H':
                    case 'N':
                        return "\u200F" + f;
    
                    case 'M':
                        var i = 1;
                        while (f.charAt(i) === "M") {
                            i++;
                        }
                        if (i < 3) {
                            // 1 and 2 M's are numeric, whereas 3 and 4 M's are letters
                            return "\u200F" + f;
                        }
                        return f;
    
                    default:
                        return f;
                }
            } : function(format) {
                return format;
            };

        
        for (var calendarName in cldrData) {
            cldrCalendar = cldrData[calendarName];
            calendar = formats[calendarName] = {};
            
            var lengths = ["full", "long", "medium", "short"];
            
            var order = cldrCalendar.dateTimeFormats["full"];
            if (order === cldrCalendar.dateTimeFormats["long"] &&
                order === cldrCalendar.dateTimeFormats["medium"] &&
                order === cldrCalendar.dateTimeFormats["short"]) {
                calendar.order = convertOrderFormat(order);
            } else {
                calendar.order = {
                    "f": convertOrderFormat(order),
                    "l": convertOrderFormat(cldrCalendar.dateTimeFormats["long"]),
                    "m": convertOrderFormat(cldrCalendar.dateTimeFormats["medium"]),
                    "s": convertOrderFormat(cldrCalendar.dateTimeFormats["short"])
                };
            }

            var usesStandAlone = standAlone(cldrCalendar);

            // glean the lengths of the various parts
            var cldrFormats = {},
                d = {},
                m = {},
                y = {};
            
            for (i = 0; i < lengths.length; i++) {
                var len = lengths[i];

                cldrFormats[len] = getDateFormat(cldrCalendar, len);
                var stripped = cldrFormats[len].replace(/'[^']*'/g, "");
                
                d[len] = stripped.replace(/[^d]/g, "");
                m[len] = stripped.replace(/[^M]/g, "");
                y[len] = stripped.replace(/[^y]/g, "");
            }

            calendar.date = {
                "dmwy": {},
                "dmy": {},
                "dmw": {},
                "dm": {},
                "my": {},
                "dw": {},
                "w": {},
                "d": {},
                "m": {},
                "y": {}
            };

                /*
                 * stand-alone of m (month) is t
                 * stand-alone of d (day) is a
                 * stand-alone of w (weekday) is l
                 * stand-alone of y (year) is r
                 */
            if (usesStandAlone) {
                calendar.date.t = {};
                calendar.date.l = {};
            }
            
            if (isAsianLang(language)) {
                calendar.date.a = {};
                calendar.date.t = {};
                calendar.date.r = {};
            }
            
            var w;
            
            i = scanForChars(cldrFormats["full"], "Ec");
            if (i > -1 && cldrFormats["full"].charAt(i) === "c") {
                w = {
                    "full": "cccc",
                    "long": "ccc",
                    "medium": "cc",
                    "short": "c"
                };
            } else { 
                w = {
                    "full": "EEEE",
                    "long": "EEE",
                    "medium": "EE",
                    "short": "E"
                };
            }

            // First attempt to find the "w" template:
            // Lengthen all components of the long to the full size, because in CLDR, the "long" format is "dmy", and then
            // find that in the full template to figure out which parts are the "w" parts and which are the "dmy" parts
            var tmp,
                wTemplate = "E {date}";
            var longFormat = cldrFormats["long"];
            var longPlus = longFormat;
            if (d["full"] !== d["long"]) {
                longPlus = longPlus.replace(d["long"], d["full"]);
            }
            if (m["full"] !== m["long"]) {
                longPlus = longPlus.replace(m["long"], m["full"]);
            }
            if (y["full"] !== y["long"]) {
                longPlus = longPlus.replace(y["long"], y["full"]);
            }
            // util.print("Search for '" + longPlus + "' in '" + cldrFormats["full"] + "'\n");
            i = cldrFormats["full"].indexOf(longPlus);
            if (i > -1) {
                tmp = cldrFormats["full"].replace(longPlus, "{date}");
                // util.print("tmp is " + tmp + "\n");
                wTemplate = tmp;
            } else {
                // didn't work. Next attempt: try searching for the w components and see if the dmy parts come before
                // or after it in the format. If it comes before, take after the the first "d", "M", or "y" as the "dmy"
                // part. If it comes after take everything up to the first "d", "M", or "y" as the "dmy" part.
                // util.print("Not found. Trying positional method\n");
                
                // strip out the quoted parts so we don't accidentally match the characters inside the quotes
                var full = cldrFormats["full"];
                var min = scanForChars(full, "dMy"),
                    max = scanForLastChars(full, "dMy");
                
                if (scanForLastChars(full, "E") < min) {
                    wTemplate = full.substring(0, min) + "{date}";
                    longPlus = full.substring(min);
                    // util.print("language " + language + " E found before date. Using wtemplate " + wTemplate + "\n");                    
                } else if (scanForChars(full, "E") > max) {
                    // scan backwards to find the last dmy char
                    i = full.length-1;
                    var skipMode = false;
                    while (i > -1) {
                        if (full.charAt(i) === "'") {
                            skipMode = !skipMode;
                        } else if (!skipMode) {
                            var c = full.charAt(i); 
                            if (c === 'd' || c === 'M' || c === 'y') {
                                break;
                            }
                        }
                        i--;
                    }
                    wTemplate = "{date}" + full.substring(i+1);
                    longPlus = full.substring(0, i+1);
                    // util.print("language " + language + " E found after date. Using wtemplate " + wTemplate + " and longPlus is " + longPlus + "\n");                    
                //} else {
                    // the w is in the middle of the dmy... not sure what to do about that!
                    // util.print("failed. Using fallback.\n");
                }
            }
            // util.print("wTemplate is " + wTemplate + "\n");
            
            calendar.date.dmwy["f"] = rtlify(correctedYear(cldrFormats["full"]));
            calendar.date.dmy["f"] = rtlify(correctedYear(longPlus));
            
            for (i = 1; i < lengths.length; i++) {
                var len = lengths[i];
                var lenAbbr = len.charAt(0);
                tmp = wTemplate.replace(/\{date\}/, cldrFormats[len]);
                tmp = tmp.replace(/[Ec]+/, w[len]);
                tmp = correctedYear(tmp);
                 
                calendar.date.dmwy[lenAbbr] = rtlify(tmp);
                calendar.date.dmy[lenAbbr] = rtlify(correctedYear(cldrFormats[len]));
            }
            
            var orders = {};
            
            for (i = 0; i < lengths.length; i++) {
                var len = lengths[i];
                var lenAbbr = len.charAt(0);
                calendar.date.w[lenAbbr] = w[len];
                calendar.date.d[lenAbbr] = d[len];
                calendar.date.m[lenAbbr] = m[len];
                calendar.date.y[lenAbbr] = correctedYear(y[len]);
                
                orders[len] = dateOrder(cldrFormats[len]);
                
                var dmy = calendar.date.dmy[lenAbbr];
                
                // generate the "dm" and the "my" formats by stripping off the appropriate part of
                // the long format
                switch (orders[len]) {
                    case "dmy":
                        // util.print("Length " + len + " order dmy\n");
                        calendar.date.my[lenAbbr] = rtlify(dmy.substring(scanForChars(dmy, "M")));
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(0, scanForLastChars(dmy, "M")));
                        break;
                    case "mdy":
                        // util.print("Length " + len + " order mdy\n");
                        calendar.date.my[lenAbbr] = rtlify(dmy.substring(0, scanForLastChars(dmy, "M")) + 
                            dmy.substring(scanForLastChars(dmy, "d")));
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(0, scanForLastChars(dmy, "d")));
                        break;
                    case "ymd":
                        // util.print("Length " + len + " order ymd\n");
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(scanForChars(dmy, "M")));
                        if (isAsianLang(language)) {
                            var firstd = scanForChars(dmy, "d");
                            if (dmy.charAt(firstd-1) == '/') {
                                firstd--;
                            }
                            calendar.date.my[lenAbbr] = rtlify(dmy.substring(0, firstd).trim());
                        } else {
                            calendar.date.my[lenAbbr] = rtlify(dmy.substring(0, scanForLastChars(dmy, "M")));
                        }
                        break;

                    case "ydm":
                        // util.print("Length " + len + " order ydm\n");
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(scanForChars(dmy, "d")));
                        calendar.date.my[lenAbbr] = rtlify(dmy.substring(0, scanForChars(dmy, "d")) +
                    dmy.substring(scanForChars(dmy, "M")));
                        break;
                }
                
                if (usesStandAlone) {
                        calendar.date.my[lenAbbr] = calendar.date.my[lenAbbr].replace(/MMMM/, "LLLL").replace(/MMM/, "LLL");
                        calendar.date.l[lenAbbr] = calendar.date.w[lenAbbr].replace(/E/g, "c"); //"l: stand."
                        calendar.date.t[lenAbbr] = calendar.date.m[lenAbbr].replace(/M/g, "L");
                }
                
                if (isAsianLang(language)) {
                        calendar.date.a[lenAbbr] = getAvailableFormat(cldrCalendar, "d").replace(/d+/, calendar.date.d[lenAbbr]);
                        calendar.date.t[lenAbbr] = getAvailableFormat(cldrCalendar, "M").replace(/M+/, calendar.date.m[lenAbbr]);
                        calendar.date.r[lenAbbr] = getAvailableFormat(cldrCalendar, "y").replace(/y+/, calendar.date.y[lenAbbr]);
                }
                
                tmp = wTemplate.replace(/\{date\}/, calendar.date.dm[lenAbbr]);
                tmp = tmp.replace(/[Ec]+/, w[len]);
                calendar.date.dmw[lenAbbr] = tmp;
                
                var dmw = calendar.date.dmw[lenAbbr];
                
                switch (dateOrder2(dmw)) {
                    case "dmw":
                        // util.print("Length " + len + " dw order dmw\n");
                        calendar.date.dw[lenAbbr] = rtlify(dmw.substring(0, scanForChars(dmw, "M")) +
                            dmw.substring(scanForChars(dmw, "Ec")));
                        break;
                    case "wdm":
                        // util.print("Length " + len + " dw order wdm\n");
                        calendar.date.dw[lenAbbr] = rtlify(dmw.substring(0, scanForLastChars(dmw, "d")));
                        break;
                    case "mdw":
                        // util.print("Length " + len + " dw order mdw\n");
                        calendar.date.dw[lenAbbr] = rtlify(dmw.substring(scanForChars(dmw, "d")));
                        break;
                    case "wmd":
                        // util.print("Length " + len + " dw order wmd\n");
                        calendar.date.dw[lenAbbr] = rtlify(dmw.substring(0, scanForChars(dmw, "M")) +
                            dmw.substring(scanForChars(dmw, "d")));
                        break;
                }
            }
            
            calendar.time = {
                "12": {},
                "24": {}
            };
            
            var available = cldrCalendar.dateTimeFormats.availableFormats;

            if (cldrCalendar.timeFormats && cldrCalendar.timeFormats["long"]) {
                var longtime = cldrCalendar.timeFormats["long"].replace(/z+/, "z");
                var mediumtime = cldrCalendar.timeFormats["medium"];
                var shorttime = cldrCalendar.timeFormats["short"];
                var strippedLongTime = longtime.replace(/'[^']*'/g, "");
                var begin, end;
                var zTemplate, aTemplate, order;
                var H, h;
                
                if (longtime.indexOf("H") > -1) {
                    // util.print("24-hour locale. Longtime: " + longtime + "\n");
                    calendar.time["24"]["h"] = strippedLongTime.replace(/[^H]/g, "");
                    calendar.time["24"]["m"] = strippedLongTime.replace(/[^m]/g, "");
                    calendar.time["24"]["s"] = strippedLongTime.replace(/[^s]/g, "");
                    
                    calendar.time["24"]["ah"] = rtlify(calendar.time["24"]["h"]);
                    calendar.time["24"]["hm"] = rtlify(shorttime);
                    
                    begin = scanForChars(mediumtime, "m");
                    end = scanForLastChars(mediumtime, "s");

                    calendar.time["24"]["ms"] = rtlify(mediumtime.substring(begin, end));
                    
                    calendar.time["24"]["ahm"] = rtlify(calendar.time["24"]["hm"]);
                    calendar.time["24"]["hms"] = rtlify(mediumtime);
                    
                    order = timeOrder(longtime);
                    switch (order) {
                        case 'ahz':
                        case 'haz':
                            begin = scanForLastChars(longtime, "s");
                            end = scanForChars(longtime, "z");
                            
                            i = end;
                            while (longtime.charAt(i) !== ' ' && i > begin) {
                                i--;
                            }
                            zTemplate = "{time}" + longtime.substring(i < begin ? end : i);
                            break;
                            
                        case 'zah':
                            begin = scanForChars(longtime, "H");
                            
                            zTemplate = longtime.substring(0, begin) + "{time}";
                            break;
                    }

                    calendar.time["24"]["hmz"] = rtlify(zTemplate.replace(/\{time\}/, calendar.time["24"]["hm"]));
                    
                    calendar.time["24"]["ahmz"] = rtlify(calendar.time["24"]["hmz"]);
                    calendar.time["24"]["ahms"] = rtlify(calendar.time["24"]["hms"]);
                    calendar.time["24"]["hmsz"] = rtlify(zTemplate.replace(/\{time\}/, calendar.time["24"]["hms"]));
                    
                    calendar.time["24"]["ahmsz"] = rtlify(calendar.time["24"]["hmsz"]); 

                    switch (order) {
                        case 'haz':
                            end = scanForChars(available["h"], "a");
                            i = end;
                            while (available["h"].charAt(i) !== ' ' && i > 0) {
                                i--;
                            }
                            i = i < 1 ? end : i;
                            aTemplate = "{time}" + available["h"].substring(i);
                            break;
                            
                        case 'ahz':
                        case 'zah':
                            begin = scanForChars(available["h"], "hK");
                            aTemplate = available["h"].substring(begin) + "{time}";
                            break;
                    }
                    h = available["h"].replace(/[^h]/g, "");
                    
                    calendar.time["12"]["h"] = h;
                    calendar.time["12"]["m"] = calendar.time["24"]["m"];
                    calendar.time["12"]["s"] = calendar.time["24"]["s"];

                    calendar.time["12"]["ah"] = rtlify(available["h"]);
                    calendar.time["12"]["hm"] = rtlify(calendar.time["24"]["hm"].replace(/H+/, h));
                    calendar.time["12"]["ms"] = rtlify(calendar.time["24"]["ms"]);
                    
                    calendar.time["12"]["ahm"] = rtlify(aTemplate.replace(/\{time\}/, calendar.time["12"]["hm"]));
                    calendar.time["12"]["hms"] = rtlify(calendar.time["24"]["hms"].replace(/H+/, h));
                    calendar.time["12"]["hmz"] = rtlify(calendar.time["24"]["hmz"].replace(/H+/, h));
                    
                    calendar.time["12"]["ahmz"] = rtlify(zTemplate.replace(/\{time\}/, aTemplate.replace(/\{time\}/, calendar.time["12"]["hm"])));
                    calendar.time["12"]["ahms"] = rtlify(aTemplate.replace(/\{time\}/, calendar.time["12"]["hms"]));
                    calendar.time["12"]["hmsz"] = rtlify(zTemplate.replace(/\{time\}/, calendar.time["12"]["hms"]));
                    
                    calendar.time["12"]["ahmsz"] = rtlify(zTemplate.replace(/\{time\}/, aTemplate.replace(/\{time\}/, calendar.time["12"]["hms"])));
                } else {
                    // util.print("12-hour locale. Longtime: " + longtime + "\n");
                    order = timeOrder(longtime);
                    
                    calendar.time["12"]["h"] = longtime.replace(/[^h]/g, "");
                    calendar.time["12"]["m"] = longtime.replace(/[^m]/g, "");
                    calendar.time["12"]["s"] = longtime.replace(/[^s]/g, "");

                    calendar.time["12"]["ah"] = rtlify(available["h"]);
                    
                    switch (order) {
                        case 'ahz':
                            begin = scanForChars(shorttime, "h");
                            aTemplate = shorttime.substring(0, begin) + "{time}";
                            
                            calendar.time["12"]["hm"] = rtlify(shorttime.substring(begin));
                            
                            begin = scanForLastChars(longtime, "s");
                            end = scanForChars(longtime, "z");
                            i = end;
                            while (longtime.charAt(i) !== ' ' && i > begin) {
                                i--;
                            }
                            zTemplate = "{time}" + longtime.substring(i < begin ? end : i);
                            break;
                            
                        case 'zah':
                            begin = scanForChars(shorttime, "h");
                            aTemplate = shorttime.substring(0, begin) + "{time}";
                            
                            calendar.time["12"]["hm"] = rtlify(shorttime.substring(begin));
                            
                            begin = scanForChars(longtime, "a");
                            zTemplate = longtime.substring(0, begin) + "{time}";
                            break;
                            
                        case 'haz':
                            begin = scanForLastChars(shorttime, "m");
                            end = scanForChars(shorttime, "a");
                            i = end;
                            while (shorttime.charAt(i) !== ' ' && i > begin) {
                                i--;
                            }
                            i = i < begin ? end : i;
                            aTemplate = "{time}" + shorttime.substring(i);
                            
                            calendar.time["12"]["hm"] = rtlify(shorttime.substring(0, i).trim());
                            
                            begin = scanForLastChars(longtime, "a");
                            end = scanForChars(longtime, "z");
                            i = end;
                            while (longtime.charAt(i) !== ' ' && i > begin) {
                                i--;
                            }
                            i = i < begin ? end : i;
                            zTemplate = "{time}" + longtime.substring(i);
                            break;
                    }

                    begin = scanForChars(mediumtime, "m");
                    end = scanForLastChars(mediumtime, "s");

                    calendar.time["12"]["ms"] = rtlify(mediumtime.substring(begin, end));
                    
                    calendar.time["12"]["ahm"] = rtlify(shorttime);
                    
                    switch (order) {
                        case 'zah':
                        case 'ahz':
                            begin = scanForChars(mediumtime, "h");
                            calendar.time["12"]["hms"] = rtlify(mediumtime.substring(begin).trim());
                            break;

                        case 'haz':
                            begin = scanForChars(mediumtime, "a");
                            calendar.time["12"]["hms"] = rtlify(mediumtime.substring(0, begin).trim());
                            break;
                    }
  
                    calendar.time["12"]["hmz"] = rtlify(zTemplate.replace(/\{time\}/, calendar.time["12"]["hm"]));
                    
                    calendar.time["12"]["ahmz"] = rtlify(zTemplate.replace(/\{time\}/, calendar.time["12"]["ahm"]));
                    calendar.time["12"]["ahms"] = rtlify(mediumtime);
                    calendar.time["12"]["hmsz"] = rtlify(zTemplate.replace(/\{time\}/, calendar.time["12"]["hms"]));
                    
                    calendar.time["12"]["ahmsz"] = rtlify(zTemplate.replace(/\{time\}/, calendar.time["12"]["ahms"]));
                    
                    H = available["H"].replace(/[^H]/g, "");
                    
                    calendar.time["24"]["h"] = available["H"];
                    calendar.time["24"]["m"] = calendar.time["12"]["m"];
                    calendar.time["24"]["s"] = calendar.time["12"]["s"];

                    calendar.time["24"]["ah"] = rtlify(calendar.time["24"]["h"]);
                    calendar.time["24"]["hm"] = rtlify(calendar.time["12"]["hm"].replace(/h+/, H));
                    calendar.time["24"]["ms"] = rtlify(calendar.time["12"]["ms"]);
                    
                    calendar.time["24"]["ahm"] = rtlify(calendar.time["24"]["hm"].replace(/h+/, H));
                    calendar.time["24"]["hms"] = rtlify(calendar.time["12"]["hms"].replace(/h+/, H));
                    calendar.time["24"]["hmz"] = rtlify(calendar.time["12"]["hmz"].replace(/h+/, H));
                    
                    calendar.time["24"]["ahmz"] = rtlify(calendar.time["24"]["hmz"]);
                    calendar.time["24"]["ahms"] = rtlify(calendar.time["24"]["hms"]);
                    calendar.time["24"]["hmsz"] = rtlify(calendar.time["12"]["hmsz"].replace(/h+/, H));
                    
                    calendar.time["24"]["ahmsz"] = rtlify(calendar.time["24"]["hmsz"]);
                }
            }
        }
        return formats;
    },
    
    createSystemResources: function (cldrData, language) {
        var formats,
            cldrCalendar,
            calendarNameSuffix,
            prop;
        
        var dayNumbers = {
            "sun": 0,
            "mon": 1,
            "tue": 2,
            "wed": 3,
            "thu": 4,
            "fri": 5,
            "sat": 6
        };
        
        for (var calendarName in cldrData) {
            cldrCalendar = cldrData[calendarName];
            formats = {};
            
            calendarNameSuffix = (calendarName !== "gregorian") ? "-" + calendarName : "";
            
            var usesStandAlone = standAlone(cldrCalendar);
            
            // now generate all the month names
            var part = cldrCalendar.months.format;
            var isAsian = isAsianLang(language);
            if (isAsianLang(language)) {
                for (prop in part.wide) {
                    formats["MMMM" + prop + calendarNameSuffix] = part.wide[prop].substring(0, part.wide[prop].length-1);
                    formats["N" + prop + calendarNameSuffix] = 
                        formats["NN" + prop + calendarNameSuffix] = 
                            formats["MMM" + prop + calendarNameSuffix] = 
                                part.abbreviated[prop].substring(0, part.abbreviated[prop].length-1);
                }
            } else {
                for (prop in part.wide) {
                    formats["MMMM" + prop + calendarNameSuffix] = part.wide[prop];
                    formats["MMM" + prop + calendarNameSuffix] = part.abbreviated[prop];
                    formats["NN" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,2);
                    formats["N" + prop + calendarNameSuffix] = part.narrow[prop];
                }
            }
            if (usesStandAlone) {
                part = cldrCalendar.months["stand-alone"];
                for (prop in part.wide) {
                    formats["LLLL" + prop + calendarNameSuffix] = part.wide[prop];
                    formats["LLL" + prop + calendarNameSuffix] = part.abbreviated[prop];
                    formats["LL" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,2);
                    formats["L" + prop + calendarNameSuffix] = part.narrow[prop];
                }
            }
            
            // now generate the names of the days of the week
            var part = cldrCalendar.days.format;
            for (prop in part.wide) {
                formats["EEEE" + dayNumbers[prop] + calendarNameSuffix] = part.wide[prop];
                formats["EEE" + dayNumbers[prop] + calendarNameSuffix] = part.abbreviated[prop];
                formats["EE" + dayNumbers[prop] + calendarNameSuffix] = part.short[prop];
                formats["E" + dayNumbers[prop] + calendarNameSuffix] = part.narrow[prop];
            }
            if (usesStandAlone) {
                part = cldrCalendar.days["stand-alone"];
                for (prop in part.wide) {
                    formats["cccc" + dayNumbers[prop] + calendarNameSuffix] = part.wide[prop];
                    formats["ccc" + dayNumbers[prop] + calendarNameSuffix] = part.abbreviated[prop];
                    formats["cc" + dayNumbers[prop] + calendarNameSuffix] = part.short[prop];
                    formats["c" + dayNumbers[prop] + calendarNameSuffix] = part.narrow[prop];
                }
            }
            
            part = cldrCalendar.dayPeriods.format.wide;
            formats["a0" + calendarNameSuffix] = part.am;
            formats["a1" + calendarNameSuffix] = part.pm;
            
            part = cldrCalendar.eras.eraNarrow;
            formats["G-1" + calendarNameSuffix] = part["0-alt-variant"];
            formats["G1" + calendarNameSuffix] = part["1-alt-variant"];
        }
        
        return formats;
    },
    createDurationResourceDetail: function (sourcePath, cldrUnitData, durationObject, length, language, script) {
        var durationSysres = {};
        var durationSysresTest = {};
        var cldrDateFieldData = {};
        var dataLength = length;
        var day, cldrDayPast, cldrDayFuture;

        var isRtl = (rtlLanguages.indexOf(language) > -1) && (!script || rtlScripts.indexOf(script) > 0);

        
        for(duration in durationObject) {
            var durationKey = "duration-" + duration;
            var temp;
            var fullStr = "";

            var unitNames = ["zero", "one", "two", "few", "many", "other"];

            for (var j = 0; j < unitNames.length; j++){
                name = unitNames[j];
                nameValue = "unitPattern-count-" + name;
                if (typeof(cldrUnitData[durationKey][nameValue]) !== 'undefined') {
                    durationSysresTest[durationObject[duration]] = {};
                    if (fullStr.length > 0) {
                        fullStr += "|";
                    }

                    temp = cldrUnitData[durationKey][nameValue].replace("{0}", "{num}");
            
                    if (unitNames[j] == "other") {
                        fullStr += "#" + temp;
                    } else {
                        fullStr += name +"#" + temp;    
                    }
                    
                    if (length === "full" && name === 'other' && duration === 'day') {
                        day = cldrUnitData[durationKey][nameValue];
                        cldrDateFieldData = loadFile(path.join(sourcePath, "dateFields.json"));
                        sourcePathSplit = sourcePath.split("/");
                        fileName = sourcePathSplit[sourcePathSplit.length -1];
                        
                        if (cldrDateFieldData) {
                            cldrDayPast =  cldrDateFieldData.main[fileName]["dates"]["fields"]["day"]["relativeTime-type-past"]["relativeTimePattern-count-other"];
                            cldrDayFuture = cldrDateFieldData.main[fileName]["dates"]["fields"]["day"]["relativeTime-type-future"]["relativeTimePattern-count-other"];
                            
                            if (isRtl) {
                                cldrDayPast = "\u200F" + cldrDayPast;
                                cldrDayFuture = "\u200F" + cldrDayFuture;
                            }

                            durationSysres["in {duration}"] = cldrDayFuture.replace(day, "{duration}").toLowerCase();    
                            durationSysres["{duration} ago"] = cldrDayPast.replace(day, "{duration}").toLowerCase();    
                        }
                    }
                }
            }            
            durationSysres[durationObject[duration]] = fullStr;
        }

        return durationSysres;
    },
    createDurationResources: function (sourcePath, cldrData, language, script) {
        var durationObject = {
            "durationPropertiesFull" : {
                "millisecond": "1#1 millisecond|#{num} milliseconds",
                "second": "1#1 second|#{num} seconds",
                "minute": "1#1 minute|#{num} minutes",
                "hour": "1#1 hour|#{num} hours",
                "day": "1#1 day|#{num} days",
                "week": "1#1 week|#{num} weeks",
                "month": "1#1 month|#{num} months",
                "year": "1#1 year|#{num} years"
            },
            "durationPropertiesLong" : {
                "millisecond": "#{num} ms",
                "second": "1#1 sec|#{num} sec",
                "minute": "1#1 min|#{num} min",
                "hour": "1#1 hr|#{num} hrs",
                "day": "durationLongDays",
                "week": "1#1 wk|#{num} wks",
                "month": "1#1 mon|#{num} mons",
                "year": "1#1 yr|#{num} yrs"
            },
            "durationPropertiesMedium" : {
                "millisecond": "#{num} ms",
                "second": "1#1 se|#{num} sec",
                "minute": "1#1 mi|#{num} min",
                "hour": "durationMediumHours",
                "day": "1#1 dy|#{num} dys",
                "week": "durationMediumWeeks",
                "month": "1#1 mo|#{num} mos",
                "year": "durationMediumYears"
            },
            "durationPropertiesShort" : {
                "millisecond": "durationShortMillis",
                "second": "#{num}s",
                "minute": "durationShortMinutes",
                "hour": "#{num}h",
                "day": "#{num}d",
                "week": "#{num}w",
                "month": "durationShortMonths",
                "year": "#{num}y"
            }
        }

        table = cldrData;
        sysres = [];
        var mergedSysres = {};
        
        for (var prop in durationObject) {
            
            switch(prop) {
                case "durationPropertiesFull":
                    unit = table.long;
                    result = module.exports.createDurationResourceDetail(sourcePath, unit, durationObject[prop], "full", language, script);
                    sysres.push(result);
                break;
                case "durationPropertiesLong":
                    unit = table.short;
                    result = module.exports.createDurationResourceDetail(sourcePath, unit, durationObject[prop], "long", language, script);
                    sysres.push(result);
                break;
                case "durationPropertiesMedium":
                    unit = table.short;
                    result = module.exports.createDurationResourceDetail(sourcePath, unit, durationObject[prop], "medium", language, script);
                    sysres.push(result);
                break;
                case "durationPropertiesShort":
                    unit = table.narrow;
                    result = module.exports.createDurationResourceDetail(sourcePath, unit, durationObject[prop], "short", language, script);
                    sysres.push(result);
                break;
            }
        }

        for (i=0; i< sysres.length; i++) {
            mergedSysres = common.merge(mergedSysres, sysres[i]);
        }
        return mergedSysres;
    },

    createSeperatorResources: function (sourcePath, cldrData, language) {
        var mergedSeperatorRes = {};
        var sepKey, fullSepKey;

        var listProperties = {
            "Full" :"listPattern-type-standard",
            "Long" : "listPattern-type-unit",
            "Medium" : "listPattern-type-unit-short",
            "Short" : "listPattern-type-unit-narrow"
        }

        cldrListData = cldrData;

        for (prop in listProperties) {

            sepKey = "separator" + prop;
            fullSepKey = "finalSeparator" + prop;

            seperatorData = cldrListData[listProperties[[prop]]];

            mergedSeperatorRes[sepKey] = seperatorData["middle"].replace(/\{.\}/g, "");
            mergedSeperatorRes[fullSepKey] = seperatorData["end"].replace(/\{.\}/g, "");
        }

        return mergedSeperatorRes;
    },

    /**
     * Find the distance between two objects in terms of number of properties that
     * are missing or have different values.
     * @param {Object} left
     * @param {Object} right
     * @return {number} the number of difference between the objects
     */
    distance: function(left, right) {
        var prop, differences = 0;
        
        if (typeof(left) === "object") {
            if (common.isArray(left)) {
                var min = 0;
                if (right && common.isArray(right)) {
                    differences += Math.abs(left.length - right.length);
                    min = Math.min(left.length, right.length);
                } else {
                    differences += left.length;
                    if (typeof(right) !== "undefined" && typeof(right) !== "object") {
                        // +1 because the type is different
                        differences++;
                    }
                }
                for (var i = 0; i < min; i++) {
                    differences += module.exports.distance(left[i], right && right[i]);
                }
            } else {
                if (typeof(right) !== "undefined" && typeof(right) !== "object") {
                    // +1 because the type is different
                    differences++;
                }
                
                // find things in left that are not in right or have a different value
                for (prop in left) {
                    if (typeof(prop) !== "undefined" && typeof(left[prop]) !== "undefined") {
                        differences += module.exports.distance(left[prop], typeof(right) === "object" && right !== null ? right[prop] : undefined);
                    }
                }
                
                if (typeof(right) === "object") {
                    // now find things in right that are missing in left
                    for (prop in right) {
                        if (typeof(prop) !== "undefined" && typeof(right[prop]) !== "undefined" && typeof(left[prop]) === "undefined") {
                            differences += module.exports.distance(undefined, right[prop]);
                        }
                    }
                }
            }
        } else if (typeof(right) === "object") {
            // switch the params around so that we iterate through the object on the left
            differences = module.exports.distance(right, left);
        } else {
            // simple types can be compared with ===
            differences = (left !== right) ? 1: 0;
        }
        
        return differences;
    },
    
    promoteFormats: function(group, parentName, filename) {
        var left, right;
        var distances = {};
        var totals = [];
        var children = 0;

        for (left in group) {
            if (left && left !== "data" && group[left]) {
                children++;
                
                // promote the grandchildren first before comparing the children
                module.exports.promoteFormats(group[left], left);
            }
        }
        
        // only need to promote a child if there are more than 1 children and the root
        // already has data
        if (group.data && children < 2) {
            return;
        }
        
        // check all the children for the distances from each other
        for (left in group) {
            if (left && left !== "data" && group[left]) {
                if (!distances[left]) distances[left] = {};
                for (right in group) {
                    if (right && right !== "data" && left !== right && group[right]) {
                        // check if this comparison has already been done or not
                        if (typeof(distances[left][right]) === "undefined") {
                            distances[left][right] = module.exports.distance(group[left].data, group[right].data);
                            if (!distances[right]) distances[right] = {};
                            // distance is reflexive
                            distances[right][left] = distances[left][right]; 
                        }
                    }
                }
            }
        }
        
        if (group.data) {
            // finally do the root as well, as it might be minimum already. If there is no root
            // data, promote the most likely child, no matter how many there are
            if (!distances["root"]) distances["root"] = {};
            for (right in group) {
                if (right && right !== "data" && "root" !== right && group[right]) {
                    if (typeof(distances["root"][right]) === "undefined") {
                        distances["root"][right] = module.exports.distance(group.data || {}, group[right].data);
                        if (!distances[right]) distances[right] = {};
                        // distance is reflexive
                        distances[right]["root"] = distances["root"][right]; 
                    }
                }
            }
        }
        
        // now sum the distances to find the one with the least distance to all its siblings
        for (left in distances) {
            var totalDistance = 0;
            for (right in distances[left]) {
                totalDistance += distances[left][right];
            }
            totals.push({
                name: left,
                total: totalDistance
            });
        }
        
        // sort to find the minimum distance
        totals.sort(function (l, r) {
            return l.total - r.total;
        });
        
        // now totals[0] has the child with the minimum total distance, which may be the root too
        if (totals[0].name === "root") {
            // already the minimum, so we don't need to do anything
            return;
        }
        
        util.print("Promoting " + totals[0].name + "/" + filename + " to " + parentName + "\n");
        // promote a child as the new root, dropping the current root
        group.data = group[totals[0].name].data;
    },
    
    pruneFormatsChild: function(parent, child) {
        util.print(".");
        
        // first recursively prune all the grandchildren before pruning the child or else the child 
        // will be too sparse to prune the grandchildren
        for (var localebit in child) {
            if (localebit !== "und" && localebit !== "data") {
                module.exports.pruneFormatsChild(child, child[localebit]);
            }
        }

        // now we can prune the child
        child.data = common.prune(parent.data, child.data);
        /*
        var childdata = common.prune(parent.data, child.data);

        var parentPreDiff = module.exports.distance(parent.data, child.data),
            parentPostDiff = module.exports.distance(parent.data, childdata),
            childDiff = module.exports.distance(child.data, childdata);
        
        if (parentPreDiff + childDiff !== parentPostDiff ) {
            console.log("prune didn't work.\n" +
                "Total parentPreDiff: " + parentPreDiff + "\n" +
                "Total parentPost   Diff: " + parentPostDiff +  "\n" +
                "Total childDiff: " + childDiff + "\n" +
                "\nparent.data:\n" + 
                JSON.stringify(parent.data, undefined, 4) + 
                "\n\nand original child.data:\n\n" + 
                JSON.stringify(child.data, undefined, 4) +
                "\n\nand child.data after pruning:\n\n" + 
                JSON.stringify(childdata, undefined, 4));
        }
        child.data = childdata;
        */
    },
    
    pruneFormats: function(parent) {
        for (var localebit in parent) {
            if (localebit !== "und" && localebit !== "data") {
                module.exports.pruneFormatsChild(parent, parent[localebit]);
            }
        }
    },
    
    writeFormats: function(outputDir, outfile, group, localeComponents) {
        var dir = path.join.apply(undefined, [outputDir].concat(localeComponents));
        var filename = path.join(dir, outfile);
        var contents = JSON.stringify(group.data, undefined, 4);
        
        // don't write out empty files!
        if (contents !== "{}") {
            util.print(localeComponents.join("-") + " ");
            
            makeDirs(dir);
            fs.writeFileSync(filename, JSON.stringify(group.data, undefined, 4), 'utf8');
        }
        
        for (var comp in group) {
            if (comp && comp !== "data") {
                module.exports.writeFormats(outputDir, outfile, group[comp], localeComponents.concat([comp]));
            }
        }
    }    
};
