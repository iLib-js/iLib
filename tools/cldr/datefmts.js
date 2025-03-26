/*
 * datefmts.js - auxillary tools used to generate the dateformats.json files
 *
 * Copyright © 2015-2024, JEDLSoft
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
var path = require('path');
var stringify = require('json-stable-stringify');

var common = require('./common.js');
var merge = common.merge;
var Locale = common.Locale;
var makeDirs = common.makeDirs;

var rtlLanguages = [
    "ae",
    "arc",
    "ar",
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
    "he",
    "jpr",
    "jrb",
    "ks",
    "ku",
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
        console.log("WARNING: unknown date order: " + fmt);
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
        console.log("WARNING: unknown date order: " + fmt);
    }
}

function timeOrder(fmt) {
    var stripped = fmt.replace(/'[^']*'/g, "");
    if (stripped.match(/H.*z/) || stripped.match(/h.*a.*z/)) {
        return "haz";
    } else if (stripped.match(/z.*H/) || stripped.match(/z.*[aB].*[hK]/)) {
        return "zah";
    } else if (stripped.match(/[Ba].*[hK]/)) {
        return "ahz";
    } else if (stripped.match(/[hK].*[aB]/)) {
        return "haz";
    } else {
        console.log("WARNING: unknown time order: " + fmt);
    }
}

function getDateFormat(calendar, length) {
    var ret = "";
    if (calendar.dateFormats && calendar.dateFormats[length]) {
        ret = typeof(calendar.dateFormats[length]) === "string" ? calendar.dateFormats[length] : calendar.dateFormats[length]._value;
        ret = ret ? ret.replace(/ *G+/, "") : ret;
    }
    return ret.trim();
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

var cldrWidths = ["abbreviated", "narrow", "wide", "short"];

function namesMatch(regular, standalone) {
    for (var i = 0; i < cldrWidths.length; i++) {
        var namesFormat = regular[cldrWidths[i]],
            namesStandAlone = standalone[cldrWidths[i]];

        for (var element in namesFormat) {
            if (element &&
                namesFormat[element] &&
                namesStandAlone[element] &&
                namesFormat[element] !== namesStandAlone[element]) {
                return false;
            }
        }
    }

    return true;
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
function standAloneM(calendar, script) {
    // Verify that the MMM, or MMMM formats contain an 'L' which indicates stand-alone
    var available = calendar.dateTimeFormats.availableFormats;
    if ((!available.MMM || available.MMM.indexOf('L') < 0) &&
        (!available.MMMM || available.MMMM.indexOf('L') < 0)) {
        return false;
    }

    // special case: if the top level locale uses one script, and this
    // sublocale has another script, then the sublocale must override
    // the standalone settings for the top level, even if the standalone
    // month names are the same as the regular monthnames.
    if (script) {
        return true;
    }

    // not only does it need to use the L format char, the names of the months
    // need to be different from regular to standalone, otherwise we will just
    // use the regular anyways
    if (!namesMatch(calendar.months.format, calendar.months["stand-alone"])) {
        return true;
    }

    return false;
}

function standAloneYM(calendar, script) {
    // Verify that the yMMM or yMMMM formats contain an 'L' which indicates stand-alone
    var available = calendar.dateTimeFormats.availableFormats;
    if ((!available.yMMM || available.yMMM.indexOf('L') < 0) &&
        (!available.yMMMM || available.yMMMM.indexOf('L') < 0)) {
        return false;
    }

    // special case: if the top level locale uses one script, and this
    // sublocale has another script, then the sublocale must override
    // the standalone settings for the top level, even if the standalone
    // month names are the same as the regular monthnames.
    if (script) {
        return true;
    }

    // not only does it need to use the L format char, the names of the months
    // need to be different from regular to standalone, otherwise we will just
    // use the regular anyways
    if (!namesMatch(calendar.months.format, calendar.months["stand-alone"])) {
        return true;
    }

    return false;
}

function standAloneW(calendar, script) {
    // Verify that the E format contains a 'c' which indicates stand-alone
    var available = calendar.dateTimeFormats.availableFormats;
    if (!available.E || available.E.indexOf('c') < 0) {
        return false;
    }

    // special case: if the top level locale uses one script, and this
    // sublocale has another script, then the sublocale must override
    // the standalone settings for the top level, even if the standalone
    // day names are the same as the regular daynames.
    if (script) {
        return true;
    }

    // not only does it need to use the c format char, the names of the days
    // need to be different from regular to standalone, otherwise we will just
    // use the regular anyways
    if (!namesMatch(calendar.days.format, calendar.days["stand-alone"])) {
        return true;
    }

    return false;
}

function standAloneY(calendar, script) {
    // Verify that the y formats contain an 'r' which indicates stand-alone
    var available = calendar.dateTimeFormats.availableFormats;
    return (available.y && available.y.indexOf('r') > -1);
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

function replaceFormats(str, org, replace) {
    var repString = str;

    if (typeof(org) === 'object') {
        for (var x in org) {
            repString = repString.replace(new RegExp(x),org[x]);
        }
        return repString;
    } else {
        return repString.replace(org,replace);
    }
    return repString;
}

module.exports = {
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
                        obj = require(sourcePath);
                        if (obj) {
                            console.log(dir + " ");

                            addDateFormat(formats, locale, obj);
                        }
                    } catch (err) {
                        console.log("File " + sourcePath + " is not readable or does not contain valid JSON.");
                        console.log(err);
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
            if (comp && comp !== "data" && group[comp]) {
                module.exports.mergeFormats(formats, group[comp], localeComponents.concat([comp]));
            }
        }
    },

    createDateFormats: function (language, script, region, cldrData) {
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
        var isAsian = isAsianLang(language);

        for (var calendarName in cldrData) {
            cldrCalendar = cldrData[calendarName];
            calendar = formats[calendarName] = {};

            var lengths = ["full", "long", "medium", "short"];

            var order = cldrCalendar['dateTimeFormats-atTime']["standard"]["full"];
            if (order === cldrCalendar["dateTimeFormats-atTime"]["standard"]["long"] &&
                order === cldrCalendar["dateTimeFormats-atTime"]["standard"]["medium"] &&
                order === cldrCalendar["dateTimeFormats-atTime"]["standard"]["short"]) {
                calendar.order = convertOrderFormat(order);
            } else {
                calendar.order = {
                    "f": convertOrderFormat(order),
                    "l": convertOrderFormat(cldrCalendar["dateTimeFormats-atTime"]["standard"]["long"]),
                    "m": convertOrderFormat(cldrCalendar["dateTimeFormats-atTime"]["standard"]["medium"]),
                    "s": convertOrderFormat(cldrCalendar["dateTimeFormats-atTime"]["standard"]["short"])
                };
            }

            // glean the lengths of the various parts
            var cldrFormats = {},
            d = {},
            m = {},
            y = {};

            for (var i = 0; i < lengths.length; i++) {
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
             * stand-alone of m (month) is l
             * stand-alone of d (day) is a
             * stand-alone of w (weekday) is e
             * stand-alone of y (year) is r
             */
            var w;

            var weekFormatIndex = scanForChars(cldrFormats["full"], "Ec");
            if (weekFormatIndex > -1 && cldrFormats["full"].charAt(weekFormatIndex) === "c") {
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
            // console.log("Search for '" + longPlus + "' in '" + cldrFormats["full"] + "'");
            var longIndex = cldrFormats["full"].indexOf(longPlus);
            if (longIndex > -1 && weekFormatIndex !== -1) {
                tmp = cldrFormats["full"].replace(longPlus, "{date}");
                // console.log("tmp is " + tmp);
                wTemplate = tmp;
            } else {
                // didn't work. Next attempt: try searching for the w components and see if the dmy parts come before
                // or after it in the format. If it comes before, take after the the first "d", "M", or "y" as the "dmy"
                // part. If it comes after take everything up to the first "d", "M", or "y" as the "dmy" part.
                // console.log("Not found. Trying positional method");

                // strip out the quoted parts so we don't accidentally match the characters inside the quotes
                var full = cldrFormats["full"];
                var min = scanForChars(full, "dMy"),
                max = scanForLastChars(full, "dMy");

                if (scanForLastChars(full, "E") < min) {
                    wTemplate = full.substring(0, min) + "{date}";
                    longPlus = full.substring(min);
                    // console.log("language " + language + " E found before date. Using wtemplate " + wTemplate);
                } else if (scanForChars(full, "E") > max) {
                    // scan backwards to find the last dmy char
                    var iterator = full.length-1;
                    var skipMode = false;
                    while (iterator > -1) {
                        if (full.charAt(iterator) === "'") {
                            skipMode = !skipMode;
                        } else if (!skipMode) {
                            var c = full.charAt(iterator);
                            if (c === 'd' || c === 'M' || c === 'y') {
                                break;
                            }
                        }
                        iterator--;
                    }
                    wTemplate = "{date}" + full.substring(iterator+1);
                    longPlus = full.substring(0, iterator+1);
                    // console.log("language " + language + " E found after date. Using wtemplate " + wTemplate + " and longPlus is " + longPlus);
                    //} else {
                    // the w is in the middle of the dmy... not sure what to do about that!
                    // console.log("failed. Using fallback.");
                }
            }
            // console.log("wTemplate is " + wTemplate);

            calendar.date.dmwy["f"] = rtlify(correctedYear(cldrFormats["full"]));
            calendar.date.dmy["f"] = rtlify(correctedYear(longPlus));

            for (var i = 0; i < lengths.length; i++) {
                if (i == 0 && weekFormatIndex > -1) {
                    continue;
                }
                var len = lengths[i];
                var lenAbbr = len.charAt(0);
                tmp = wTemplate.replace(/\{date\}/, cldrFormats[len]);
                tmp = tmp.replace(/[Ec]+/, w[len]);
                tmp = correctedYear(tmp);

                calendar.date.dmwy[lenAbbr] = rtlify(tmp);
                calendar.date.dmy[lenAbbr] = rtlify(correctedYear(cldrFormats[len]));
            }

            var orders = {};

            for (var i = 0; i < lengths.length; i++) {
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
                        // console.log("Length " + len + " order dmy");
                        calendar.date.my[lenAbbr] = rtlify(dmy.substring(scanForChars(dmy, "M")));
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(0, scanForLastChars(dmy, "M")));
                        break;
                    case "mdy":
                        // console.log("Length " + len + " order mdy");
                        calendar.date.my[lenAbbr] = rtlify(dmy.substring(0, scanForLastChars(dmy, "M")) +
                            dmy.substring(scanForLastChars(dmy, "d")));
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(0, scanForLastChars(dmy, "d")));
                        break;
                    case "ymd":
                        // console.log("Length " + len + " order ymd");
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(scanForChars(dmy, "M")));
                        if (isAsian) {
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
                        // console.log("Length " + len + " order ydm");
                        calendar.date.dm[lenAbbr] = rtlify(dmy.substring(scanForChars(dmy, "d")));
                        calendar.date.my[lenAbbr] = rtlify(dmy.substring(0, scanForChars(dmy, "d")) +
                            dmy.substring(scanForChars(dmy, "M")));
                        break;
                }

                if (standAloneYM(cldrCalendar, script)) {
                    if (!calendar.date.mys) {
                        calendar.date.mys = {};
                    }
                    calendar.date.mys[lenAbbr] = calendar.date.my[lenAbbr].replace(/MMMM/, "LLLL").replace(/MMM/, "LLL");
                }

                if (standAloneM(cldrCalendar, script) || isAsian) {
                    if (!calendar.date.l) {
                        calendar.date.l = {};
                    }
                    if (isAsian) {
                        if(language === "ko" && (lenAbbr === 'f' || lenAbbr === "l")) {
                            calendar.date.l[lenAbbr] = getAvailableFormat(cldrCalendar, "M").replace("월","").replace(/M+/, calendar.date.m[lenAbbr]);
                        } else {
                            calendar.date.l[lenAbbr] = getAvailableFormat(cldrCalendar, "M").replace(/M+/, calendar.date.m[lenAbbr]);
                        }
                    } else {
                        calendar.date.l[lenAbbr] = calendar.date.m[lenAbbr].replace(/M/g, "L");
                    }
                }

                if (standAloneW(cldrCalendar, script)) {
                    if (!calendar.date.e) {
                        calendar.date.e = {};
                    }
                    calendar.date.e[lenAbbr] = calendar.date.w[lenAbbr].replace(/E/g, "c");
                }

                if (standAloneY(cldrCalendar, script) || isAsian) {
                    if (!calendar.date.r) {
                        calendar.date.r = {};
                    }
                    if (isAsian) {
                        calendar.date.r[lenAbbr] = getAvailableFormat(cldrCalendar, "y").replace(/y+/, calendar.date.y[lenAbbr]);
                    } else {
                        calendar.date.r[lenAbbr] = calendar.date.y[lenAbbr].replace(/y/g, "r");
                    }
                }

                if (isAsian) {
                    if (!calendar.date.a) {
                        calendar.date.a = {};
                    }
                    calendar.date.a[lenAbbr] = getAvailableFormat(cldrCalendar, "d").replace(/d+/, calendar.date.d[lenAbbr]);
                }

                tmp = wTemplate.replace(/\{date\}/, calendar.date.dm[lenAbbr]);
                tmp = tmp.replace(/[Ec]+/, w[len]);
                calendar.date.dmw[lenAbbr] = tmp;

                var dmw = calendar.date.dmw[lenAbbr];

                switch (dateOrder2(dmw)) {
                    case "dmw":
                        // console.log("Length " + len + " dw order dmw");
                        calendar.date.dw[lenAbbr] = rtlify(dmw.substring(0, scanForChars(dmw, "M")) +
                            dmw.substring(scanForChars(dmw, "Ec")));
                        break;
                    case "wdm":
                        // console.log("Length " + len + " dw order wdm");
                        calendar.date.dw[lenAbbr] = rtlify(dmw.substring(0, scanForLastChars(dmw, "d")));
                        break;
                    case "mdw":
                        // console.log("Length " + len + " dw order mdw");
                        calendar.date.dw[lenAbbr] = rtlify(dmw.substring(scanForChars(dmw, "d")));
                        break;
                    case "wmd":
                        // console.log("Length " + len + " dw order wmd");
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
                    // console.log("24-hour locale. Longtime: " + longtime);
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
                            while (longtime.charAt(i) !== ' ' && longtime.charAt(i) !== ' ' && i > begin) {
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
                            end = scanForChars(available["h"], "aB");
                            i = end;
                            while (((available["h"].charAt(i) !== ' ') && (available["h"].charAt(i) !== ' ')) && i > 0) {
                                i--;
                            }
                            i = i < 1 ? end : i;
                            aTemplate = "{time}" + available["h"].substring(i);
                            break;

                        case 'ahz':
                        case 'zah':
                            begin = scanForChars(available["h"], "hK");
                            aTemplate = available["h"].substring(0, begin) + "{time}";
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
                    // console.log("12-hour locale. Longtime: " + longtime);
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
                            while (longtime.charAt(i) !== ' ' && longtime.charAt(i) !== ' ' && i > begin) {
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
                            while (shorttime.charAt(i) !== ' ' && shorttime.charAt(i) !== ' ' && i > begin) {
                                i--;
                            }
                            i = i < begin ? end : i;
                            aTemplate = "{time}" + shorttime.substring(i);

                            calendar.time["12"]["hm"] = rtlify(shorttime.substring(0, i).trim());

                            begin = scanForLastChars(longtime, "a");
                            end = scanForChars(longtime, "z");
                            i = end;
                            while (longtime.charAt(i) !== ' ' && longtime.charAt(i) !== ' ' && i > begin) {
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

            var startTime = {
                "y+":"{sy}",
                "M+":"{sm}",
                "d+":"{sd}",
            };
            calendar.range = {
                "c00": {},
                "c01": {},
                "c02": {},
                "c03": {},
                "c10": {},
                "c11": {},
                "c12": {},
                "c20": {},
                "c30": {}
            };

            for (i = 0; i < lengths.length; i++) {
                var len = lengths[i];
                var lenAbbr = len.charAt(0);
                var dateRangeTemplateOrder;
                var cFmt0, opcFmt0, cFmt1, cFmt2, cFmt3, cFmt10, cFmt11, cFmt12, cFmt20, cFmt30;

                if (typeof(calendar.order) === 'object'){
                    dateRangeTemplateOrder = calendar.order[lenAbbr] + " – " + calendar.order[lenAbbr];
                    cFmt0 = calendar.order[lenAbbr] + " – {time}";
                    opcFmt0  = "{time} – " + calendar.order[lenAbbr];
                } else {
                    dateRangeTemplateOrder = calendar.order + " – " + calendar.order;
                    cFmt0 = calendar.order + " – {time}";
                    if (language === 'eu') {//ymd case
                        cFmt0 = cFmt0.replace(" – {time}", " – ({time})");
                    }
                    opcFmt0  = "{time} – " + calendar.order;
                }
                var dateTimeOrder = dateRangeTemplateOrder.indexOf("{date}") === 0 ? true: false;
                var dateOnlyTemplate = "{date} – {date}";

                var dmyiLib = "dmy"
                var dateRangeTemplate = dateRangeTemplateOrder;

                var regExp = /[^s^\s^\-^\.^\/^\u200f]y+/;
                var regExp2 = /\bd+\b/;
                var regExp3 = /\by+\b/;
                var regExp4 = /\b[LM]+\b/;

                var dmyOrdercldr = dateOrder(cldrFormats[len]);

                if (calendar.date[dmyiLib] !== undefined && calendar.date[dmyiLib][lenAbbr] !== undefined) {
                    dateRangeTemplate = replaceFormats(dateRangeTemplate, "{date}", calendar.date[dmyiLib][lenAbbr]);
                    dateOnlyTemplate = replaceFormats(dateOnlyTemplate, "{date}", calendar.date[dmyiLib][lenAbbr]);

                    if (dateTimeOrder) { //{date}{time}
                        switch(dmyOrdercldr) {
                            case "dmy":
                                //console.log("dt,dmy");

                                cFmt0 = replaceFormats(cFmt0, "{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (language === 'nnh' && (lenAbbr === 'f' || lenAbbr === 'l' )) { //'lyɛ'̌ʼ d 'na' MMMM, yyyy
                                    cFmt0 = cFmt0.replace(regExp3, "{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                } else {
                                    cFmt0 = replaceFormats(cFmt0, startTime);
                                }

                                cFmt0 = replaceFormats(cFmt0,"{time}", "{st}");
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{et}");
                                cFmt0 = cFmt0.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c00"][lenAbbr] = cFmt0;

                                cFmt1 = dateRangeTemplate;

                                if (language === 'nnh' && (lenAbbr === 'f' || lenAbbr === 'l' )) { //'lyɛ'̌ʼ d 'na' MMMM, yyyy
                                    cFmt1 = cFmt1.replace(regExp3, "{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                } else {
                                    cFmt1 = replaceFormats(dateRangeTemplate, startTime);
                                }

                                cFmt1 = replaceFormats(cFmt1,"{time}", "{st}");
                                cFmt1 = replaceFormats(cFmt1,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                cFmt1 = cFmt1.replace(regExp3,"{ey}").replace(regExp4, "{em}").replace(regExp2,"{ed}");
                                cFmt1 = replaceFormats(cFmt1, "{time}", "{et}");
                                cFmt1 = cFmt1.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c01"][lenAbbr] = cFmt1;
                                calendar.range["c02"][lenAbbr] = cFmt1;
                                calendar.range["c03"][lenAbbr] = cFmt1;

                                //cFmt10 = dateOnlyTemplate;
                                cFmt10 = "{date} – {date}";
                                cFmt10 =  isRtl? "\u200F" + cFmt10 : cFmt10;

                                cFmt10 = cFmt10.replace(/{date}/, calendar.date["d"][lenAbbr]);
                                cFmt10 = cFmt10.replace(regExp2,"{sd}");

                                cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (language === 'nnh' && (lenAbbr === 'f' || lenAbbr === 'l' )) { //'lyɛ'̌ʼ d 'na' MMMM, yyyy
                                    cFmt10 = cFmt10.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");

                                } else {
                                    cFmt10 = cFmt10.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                }

                                cFmt10 = cFmt10.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c10"][lenAbbr] = cFmt10;

                                cFmt11 = "{date} – {date}";
                                cFmt11 = replaceFormats(cFmt11, "{date}", calendar.date["dm"][lenAbbr]);

                                if (language === 'nnh' && (lenAbbr === 'f' || lenAbbr === 'l' )) { //'lyɛ'̌ʼ d 'na' MMMM, yyyy
                                    cFmt11 = cFmt11.replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                } else {
                                    cFmt11 = replaceFormats(cFmt11, startTime);
                                }

                                cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt11 = cFmt11.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt11 = cFmt11.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c11"][lenAbbr] = cFmt11;

                                cFmt12 = dateOnlyTemplate;

                                if (language === 'nnh' && (lenAbbr === 'f' || lenAbbr === 'l' )) { //'lyɛ'̌ʼ d 'na' MMMM, yyyy
                                    cFmt12 = cFmt12.replace(regExp3, "{sy}").replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                } else {
                                    cFmt12 = replaceFormats(cFmt12, startTime);
                                }

                                cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt12 = cFmt12.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt12 = cFmt12.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c12"][lenAbbr] = cFmt12;

                                //cFmt20 = dateOnlyTemplate;

                                cFmt20 = "{date} – {date}";
                                var myFormat = calendar.date["mys"] ? calendar.date["mys"][lenAbbr] : calendar.date["my"][lenAbbr];
                                cFmt20 = replaceFormats(cFmt20, "{date}", myFormat);

                                cFmt20 = cFmt20.replace(/[LM]+/,"{sm}").replace(/L+/, "{sm}").replace(regExp3, "{sy}");
                                cFmt20 = replaceFormats(cFmt20, "{date}", myFormat);

                                if (language === 'nnh' && (lenAbbr === 'f' || lenAbbr === 'l' )) { //'lyɛ'̌ʼ d 'na' MMMM, yyyy
                                    cFmt20 = cFmt20.replace(regExp3, "{ey}").replace(/[LM]+/, "{em}").replace(/L+/, "{em}");
                                } else {
                                    cFmt20 = cFmt20.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(/L+/, "{em}");
                                }

                                cFmt20 = cFmt20.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c20"][lenAbbr] = cFmt20;

                                cFmt30 = "{sy} – {ey}";
                                calendar.range["c30"][lenAbbr] = isRtl? "\u200F" + cFmt30 : cFmt30;

                                break;
                            case "mdy":
                                //console.log("{date}{time}, mdy");

                                cFmt0 = replaceFormats(cFmt0, "{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt0 = replaceFormats(cFmt0, startTime);
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{st}");
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{et}");
                                cFmt0 = cFmt0.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c00"][lenAbbr] = cFmt0;

                                cFmt1 = dateRangeTemplate;
                                cFmt1 = replaceFormats(dateRangeTemplate, startTime);
                                cFmt1 = replaceFormats(cFmt1,"{time}", "{st}");
                                cFmt1 = replaceFormats(cFmt1,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt1 = cFmt1.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt1 = replaceFormats(cFmt1, "{time}", "{et}");
                                cFmt1 = cFmt1.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c01"][lenAbbr] = cFmt1;
                                calendar.range["c02"][lenAbbr] = cFmt1;
                                calendar.range["c03"][lenAbbr] = cFmt1;

                                cFmt10 = dateOnlyTemplate;

                                if (lenAbbr === 's') {
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                    cFmt10 = replaceFormats(cFmt10, startTime);
                                    cFmt10 = cFmt10.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                } else {
                                    cFmt10 = replaceFormats(cFmt10, startTime);
                                    cFmt10 = cFmt10.replace(/[\s\/]{sy}/,"");
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                    cFmt10 = cFmt10.replace(regExp,"{ey}").replace(/[LM]+/, "").replace(regExp2,"{ed}");
                                    cFmt10 = cFmt10.replace(/}, –/, "} –").replace("– /{",  "– {" );
                                }

                                cFmt10 = cFmt10.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c10"][lenAbbr] = cFmt10;

                                cFmt11 = dateOnlyTemplate;
                                cFmt11 = replaceFormats(cFmt11, startTime);
                                cFmt11 = cFmt11.replace(/[\,][s\s\-\.\/^\u200f]{sy}/,"").replace(/[\/]{sy}/,"");
                                cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt11 = cFmt11.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt11 = cFmt11.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c11"][lenAbbr] = cFmt11;

                                cFmt12 = dateOnlyTemplate;
                                cFmt12 = replaceFormats(cFmt12, startTime);
                                cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt12 = cFmt12.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt12 = cFmt12.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c12"][lenAbbr] = cFmt12;

                                cFmt20 = "{date} – {date}";
                                var myFormat = calendar.date["mys"] ? calendar.date["mys"][lenAbbr] : calendar.date["my"][lenAbbr];
                                cFmt20 = replaceFormats(cFmt20, "{date}", myFormat);
                                cFmt20 = cFmt20.replace(regExp,"{sy}").replace(/[LM]+/, "{sm}");
                                cFmt20 = cFmt20.replace(/[\W\s]{sd}/,"");
                                cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);
                                cFmt20 = cFmt20.replace(regExp,"{ey}").replace(/[LM]+/, "{em}");
                                cFmt20 = cFmt20.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c20"][lenAbbr] = cFmt20;

                                cFmt30 = "{sy} – {ey}";
                                calendar.range["c30"][lenAbbr] = isRtl? "\u200F" + cFmt30 : cFmt30;

                                break;
                            case "ymd":
                                //console.log("dt,ymd");
                                cFmt0 = replaceFormats(cFmt0, "{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt0 = replaceFormats(cFmt0, startTime);
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{st}");
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{et}");
                                cFmt0 = cFmt0.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c00"][lenAbbr] = cFmt0;

                                cFmt1 = dateRangeTemplate;
                                cFmt1 = replaceFormats(dateRangeTemplate, startTime);
                                cFmt1 = replaceFormats(cFmt1,"{time}", "{st}");

                                cFmt1 = replaceFormats(cFmt1,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (language === 'lt' && (lenAbbr === 'f' || lenAbbr === 'l')) {
                                    cFmt1 = cFmt1.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(/[^\'^s]d+/," {ed}")
                                } else {
                                    cFmt1 = cFmt1.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                }

                                cFmt1 = replaceFormats(cFmt1, "{time}", "{et}");
                                cFmt1 = cFmt1.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c01"][lenAbbr] = cFmt1;

                                cFmt2 = dateRangeTemplate;
                                cFmt2 = replaceFormats(dateRangeTemplate, startTime);
                                cFmt2 = replaceFormats(cFmt2,"{time}", "{st}");

                                cFmt2 = replaceFormats(cFmt2,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (language === 'lt' && (lenAbbr === 'f' || lenAbbr === 'l')) {
                                    cFmt2 = cFmt2.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(/[^\'^s]d+/," {ed}")
                                } else {
                                    cFmt2 = cFmt2.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                }

                                cFmt2 = replaceFormats(cFmt2, "{time}", "{et}");
                                cFmt2 = cFmt2.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c02"][lenAbbr] = cFmt2;

                                cFmt3 = dateRangeTemplate;
                                cFmt3 = replaceFormats(dateRangeTemplate, startTime);
                                cFmt3 = replaceFormats(cFmt3,"{time}", "{st}");
                                cFmt3 = replaceFormats(cFmt3,"{date}", calendar.date[dmyiLib][lenAbbr]);


                                if (language === 'lt' && (lenAbbr === 'f' || lenAbbr === 'l')) {
                                    cFmt3 = cFmt3.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(/[^\'^s]d+/," {ed}");
                                } else {
                                    cFmt3 = cFmt3.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                }

                                cFmt3 = replaceFormats(cFmt3, "{time}", "{et}");
                                cFmt3 = cFmt3.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c03"][lenAbbr] = cFmt3;

                                cFmt10 = dateOnlyTemplate;
                                cFmt10 = replaceFormats(cFmt10, startTime);

                                if (language === 'lt'&& (lenAbbr === 'f' || lenAbbr === 'l')) {
                                    cFmt10 = cFmt10.replace(/{date}/, "{ed} 'd'.");
                                } else if(isAsian){
                                    if (cFmt10.search(/日|일/) !== -1) {
                                        cFmt10 = cFmt10.replace(/{date}/, calendar.date["a"][lenAbbr]);
                                        cFmt10 = cFmt10.replace(/[^s]d+/, " {ed}");
                                    } else {
                                        cFmt10 = cFmt10.replace(/{date}/, "{ed}");
                                    }

                                } else {
                                    cFmt10 = cFmt10.replace(/{date}/, "{ed}");
                                }

                                cFmt10 = cFmt10.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c10"][lenAbbr] = cFmt10;

                                cFmt11 = dateOnlyTemplate;
                                cFmt11 = replaceFormats(cFmt11, startTime);
                                cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (language === 'lt' && (lenAbbr === 'f' || lenAbbr === 'l')) {
                                    cFmt11 = cFmt11.replace(/y+[\s\-\.\/^\u200f]/,"").replace(/[LM]+/, "{em}").replace(/[^'^s^]d+/, " {ed}");
                                    cFmt11 = cFmt11.replace(/'m'. {em}/, " {em}");
                                } else if (language === 'eu' && (lenAbbr === 'f' || lenAbbr === 'l')) {
                                    cFmt11 = cFmt11.replace(/y+\(\'e\'\)\'ko\'/,"").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                } else if (isAsian) {
                                    if (lenAbbr === 's' || lenAbbr === 'm') {
                                        cFmt11 = cFmt11.replace(/\by+/,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                    } else {
                                        cFmt11 = cFmt11.replace(/\by+\W/,"").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                    }

                                } else if (lenAbbr ==='s' || lenAbbr ==='m') {
                                    cFmt11 = cFmt11.replace(/[^s^\s^\u200f]y+/,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                } else {
                                    cFmt11 = cFmt11.replace(/[^s^\s^\u200f]y+\W+/,"").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                }

                                cFmt11 = cFmt11.replace(/\'/g,"").replace(/\s\s/g," ");

                                calendar.range["c11"][lenAbbr] = cFmt11;

                                cFmt12 = dateOnlyTemplate;
                                cFmt12 = replaceFormats(cFmt12, startTime);

                                cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (language === 'lt' && (lenAbbr === 'f' || lenAbbr === 'l')) {
                                    cFmt12 = cFmt12.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(/[^'^s^]d+/, " {ed}");
                                } else {
                                    cFmt12 = cFmt12.replace(regExp,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                }
                                cFmt12 = cFmt12.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c12"][lenAbbr] = cFmt12;


                                cFmt20 = "{date} – {date}";
                                var myFormat = calendar.date["mys"] ? calendar.date["mys"][lenAbbr] : calendar.date["my"][lenAbbr];
                                cFmt20 = replaceFormats(cFmt20, "{date}", myFormat);

                                cFmt20 = cFmt20.replace(/[LM]+/,"{sm}").replace(/L+/,"{sm}").replace(/y+/, "{sy}");
                                cFmt20 = replaceFormats(cFmt20, "{date}", myFormat);
                                cFmt20 = cFmt20.replace(regExp, "{ey}").replace(/[LM]+/, "{em}").replace(/L+/, "{em}");

                                cFmt20 = cFmt20.replace(/\'/g,"").replace(/\s\s/g," ").trim();
                                calendar.range["c20"][lenAbbr] = cFmt20;

                                cFmt30 = "{sy} – {ey}";

                                calendar.range["c30"][lenAbbr] = isRtl? "\u200F" + cFmt30 : cFmt30;

                                break;

                            case "ydm":

                                cFmt0 = replaceFormats(cFmt0, "{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt0 = cFmt0.replace(regExp3,"{sy}").replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{st}");
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{et}");
                                cFmt0 = cFmt0.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c00"][lenAbbr] = cFmt0;

                                //{sy} {sd}{sm} {st} - {ey} {ed}{em} {et}
                                cFmt1 = dateRangeTemplate;
                                cFmt1 = cFmt1.replace(regExp3,"{sy}").replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                cFmt1 = replaceFormats(cFmt1,"{time}", "{st}");
                                cFmt1 = replaceFormats(cFmt1,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt1 = cFmt1.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt1 = replaceFormats(cFmt1, "{time}", "{et}");
                                cFmt1 = cFmt1.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c01"][lenAbbr] = cFmt1;
                                calendar.range["c02"][lenAbbr] = cFmt1;
                                calendar.range["c03"][lenAbbr] = cFmt1;

                                //{sy} {sd}{sm} – {ed}{em}
                                cFmt10 = dateOnlyTemplate;
                                cFmt10 = cFmt10.replace(regExp3,"{sy}").replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                cFmt10 = replaceFormats(cFmt10,"{date}",calendar.date["dm"][lenAbbr]);
                                cFmt10 = cFmt10.replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt10 = cFmt10.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c10"][lenAbbr] = cFmt10;

                                //{sy} {sd}{sm} – {ey} {ed}{em}
                                cFmt11 = dateOnlyTemplate;
                                cFmt11 = cFmt11.replace(regExp3,"{sy}").replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt11 = cFmt11.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt11 = cFmt11.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c11"][lenAbbr] = cFmt11;
                                calendar.range["c12"][lenAbbr] = cFmt11;

                                cFmt20 = "{date} – {date}";
                                var myFormat = calendar.date["mys"] ? calendar.date["mys"][lenAbbr] : calendar.date["my"][lenAbbr];
                                cFmt20 = replaceFormats(cFmt20, "{date}", myFormat);

                                cFmt20 = cFmt20.replace(regExp3,"{sy}").replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                cFmt20 = cFmt20.replace(/{sd}\W/,"");
                                cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);
                                cFmt20 = cFmt20.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(/\bd+\W/,"");
                                cFmt20 = cFmt20.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c20"][lenAbbr] = cFmt20;

                                cFmt30 = "{sy} – {ey}";
                                calendar.range["c30"][lenAbbr] = isRtl? "\u200F" + cFmt30 : cFmt30;

                                break;
                            default:
                                console.log("*** [Need to Implement]{date}{time} : " + dmyOrdercldr  + "] " + language + "-"+script+ "-"+region +"  ******");
                            break;
                        }
                    } else { //{time}{date}
                        switch (dmyOrdercldr) {
                            case "dmy": // vi-VN Only: dd MMMM 'năm' yyyy,

                                cFmt0 = opcFmt0;
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{st}");
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{et}");
                                cFmt0 = replaceFormats(cFmt0, "{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt0 = cFmt0.replace(/\b\wy+\b/,"{sy}").replace(regExp2,"{sd}").replace(regExp4,"{sm}");
                                cFmt0 = cFmt0.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c00"][lenAbbr] = cFmt0;

                                cFmt1 = dateRangeTemplate;
                                cFmt1 = replaceFormats(cFmt1,"{time}", "{st}");
                                cFmt1 = cFmt1.replace(/\b\wy+\b/,"{sy}").replace(regExp2,"{sd}").replace(regExp4,"{sm}");
                                cFmt1 = replaceFormats(cFmt1,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt1 = replaceFormats(cFmt1, "{time}", "{et}");
                                if (language === 'vi') {
                                    if (lenAbbr === 'l') {
                                        cFmt1 = cFmt1.replace(/yyyy/,"{ey}").replace(regExp4, "{em}").replace(regExp2,"{ed}");
                                    } else  {
                                        cFmt1 = cFmt1.replace(regExp3,"{ey}").replace(regExp4, "{em}").replace(regExp2,"{ed}");
                                    }
                                } else {
                                    cFmt1 = cFmt1.replace(regExp3,"{ey}").replace(regExp4, "{em}").replace(regExp2,"{ed}");
                                }
                                cFmt1 = cFmt1.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c01"][lenAbbr] = cFmt1;
                                calendar.range["c02"][lenAbbr] = cFmt1;
                                calendar.range["c03"][lenAbbr] = cFmt1;

                                //{sd} - {ed}{em}{ey}
                                cFmt10 = "{date} – {date}";

                                if (language === 'vi') {
                                    if (lenAbbr === 'l') {
                                        cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date["d"][lenAbbr]);
                                        cFmt10 = cFmt10.replace(" 'tháng' MM", "");
                                        cFmt10 = cFmt10.replace(regExp2,"{sd}")
                                        cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date["dmy"][lenAbbr]);
                                        cFmt10 = cFmt10.replace(regExp2, "{ed}").replace(regExp4, "{em}").replace(/\b\wy+\b/, "{ey}");
                                    } else {
                                        cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date["d"][lenAbbr]);
                                        cFmt10 = cFmt10.replace(regExp2,"{sd}")
                                        cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date["dmy"][lenAbbr]);
                                        cFmt10 = cFmt10.replace(regExp2, "{ed}").replace(regExp4, "{em}").replace(regExp3, "{ey}");
                                    }
                                } else {
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date["d"][lenAbbr]);
                                    cFmt10 = cFmt10.replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                    cFmt10 = cFmt10.replace(/\by+/,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                }
                                cFmt10 = cFmt10.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c10"][lenAbbr] = cFmt10;

                                //{sd}{sm} - {ed}{em}{ey}
                                cFmt11 = "{date} – {date}";
                                if (language === 'vi') {
                                    cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date["dm"][lenAbbr]);
                                    cFmt11 = cFmt11.replace(regExp2,"{sd}").replace(regExp4,"{sm}");
                                    cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date["dmy"][lenAbbr]);
                                    cFmt11 = cFmt11.replace(regExp2, "{ed}").replace(regExp4, "{em}").replace(/\b\wy+\b/, "{ey}");
                                } else {
                                    cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date["dm"][lenAbbr]);
                                    cFmt11 = cFmt11.replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                    cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                    if (lenAbbr === 's') {
                                        cFmt11 = cFmt11.replace(regExp3,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                    } else {
                                        cFmt11 = cFmt11.replace(/\by+/,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                    }
                                }
                                cFmt11 = cFmt11.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c11"][lenAbbr] = cFmt11;

                                // dmy - dmy
                                cFmt12 = "{date} – {date}";
                                cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (language === 'vi') {
                                    if (lenAbbr === 'l') {
                                        cFmt12 = cFmt12.replace(regExp2,"{sd}").replace(regExp4,"{sm}").replace(/\b\wy+\b/, "{sy}");
                                        cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date["dmy"][lenAbbr]);
                                        cFmt12 = cFmt12.replace(regExp2, "{ed}").replace(regExp4, "{em}").replace(/yyyy/, "{ey}");
                                    } else {
                                        cFmt12 = cFmt12.replace(regExp2,"{sd}").replace(regExp4,"{sm}").replace(regExp3, "{sy}");
                                        cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date["dmy"][lenAbbr]);
                                        cFmt12 = cFmt12.replace(regExp2, "{ed}").replace(regExp4, "{em}").replace(/\b\y+\b/, "{ey}");
                                    }
                                } else {
                                    cFmt12 = cFmt12.replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}").replace(regExp3,"{sy}");
                                    cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                    if (lenAbbr === 's') {
                                        cFmt12 = cFmt12.replace(regExp3,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                    } else {
                                        cFmt12 = cFmt12.replace(/\by+/,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                    }
                                }
                                cFmt12 = cFmt12.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c12"][lenAbbr] = cFmt12;

                                cFmt20 = "{date} – {date}";
                                var myFormat = calendar.date["mys"] ? calendar.date["mys"][lenAbbr] : calendar.date["my"][lenAbbr];
                                cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);

                                if (language === 'vi') {
                                    if (lenAbbr === 'l') {
                                        cFmt20 = cFmt20.replace(/'Ngày' dd 'tháng' /,"");
                                        cFmt20 = cFmt20.replace(/[LM]+/,"{sm}").replace(/\b\wy+\b/, "{sy}");
                                        cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);
                                        cFmt20 = cFmt20.replace(/'Ngày' dd 'tháng' /,"");
                                        cFmt20 = cFmt20.replace(/[LM]+/,"{em}").replace(/yyyy/, "{ey}");

                                    } else if(lenAbbr === 'f') {
                                        cFmt20 = cFmt20.replace(/d+\s/,"");
                                        cFmt20 = cFmt20.replace(/[LM]+/,"{sm}").replace(regExp3, "{sy}");
                                        cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);
                                        cFmt20 = cFmt20.replace(/\bd+/,"");
                                        cFmt20 = cFmt20.replace(/[LM]+/,"{em}").replace(regExp3, "{ey}");

                                    } else {
                                        cFmt20 = cFmt20.replace(/d+\W/,"");
                                        cFmt20 = cFmt20.replace(/[LM]+/,"{sm}").replace(regExp3, "{sy}");
                                        cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);
                                        cFmt20 = cFmt20.replace(/d+\W/,"");
                                        cFmt20 = cFmt20.replace(/[LM]+/,"{em}").replace(regExp3, "{ey}");
                                    }
                                } else {
                                    cFmt20 = cFmt20.replace(/[LM]+/, "{sm}").replace(regExp3,"{sy}");
                                    cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);

                                    if (lenAbbr === 's') {
                                        cFmt20 = cFmt20.replace(regExp3,"{ey}").replace(/[LM]+/,"{em}");
                                    } else {
                                        cFmt20 = cFmt20.replace(/\by+/,"{ey}").replace(/[LM]+/,"{em}");
                                    }
                                }
                                cFmt20 = cFmt20.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c20"][lenAbbr] = cFmt20;

                                cFmt30 = "{sy} – {ey}";
                                calendar.range["c30"][lenAbbr] = isRtl? "\u200F" + cFmt30 : cFmt30;

                                break;
                            case "mdy":
                                cFmt0 = opcFmt0;
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{st}");
                                cFmt0 = replaceFormats(cFmt0,"{time}", "{et}");
                                cFmt0 = replaceFormats(cFmt0, "{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt0 = cFmt0.replace(regExp3,"{sy}").replace(regExp2,"{sd}").replace(regExp4,"{sm}");
                                cFmt0 = cFmt0.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c00"][lenAbbr] = cFmt0;

                                cFmt1 = dateRangeTemplate;
                                cFmt1 = replaceFormats(dateRangeTemplate, startTime);
                                cFmt1 = replaceFormats(cFmt1,"{time}", "{st}");
                                cFmt1 = replaceFormats(cFmt1,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt1 = cFmt1.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                cFmt1 = replaceFormats(cFmt1, "{time}", "{et}");
                                cFmt1 = cFmt1.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c01"][lenAbbr] = cFmt1;
                                calendar.range["c02"][lenAbbr] = cFmt1;
                                calendar.range["c03"][lenAbbr] = cFmt1;

                                cFmt10 = "{date} – {date}";

                                if (lenAbbr === 's') { //mdy-mdy
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                    cFmt10 = replaceFormats(cFmt10, startTime);
                                    cFmt10 = cFmt10.replace(regExp3,"{sy}").replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                    cFmt10 = cFmt10.replace(regExp3,"{ey}").replace(/[LM]+/, "{em}").replace(regExp2,"{ed}");
                                } else { //m d-d y
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date["dm"][lenAbbr]);
                                    cFmt10 = cFmt10.replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                    cFmt10 = replaceFormats(cFmt10,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                    cFmt10 = cFmt10.replace(/[^s^\s]y+/,"{ey}").replace(/[LM]+/,"").replace(regExp2,"{ed}");
                                }
                                cFmt10 = cFmt10.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c10"][lenAbbr] = cFmt10;

                                //md - mdy
                                cFmt11 = "{date} – {date}";
                                cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date["dm"][lenAbbr]);
                                cFmt11 = cFmt11.replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}");
                                cFmt11 = replaceFormats(cFmt11,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                if (lenAbbr === 's') {
                                    cFmt11 = cFmt11.replace(regExp3,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                } else {
                                    cFmt11 = cFmt11.replace(/[^s^\s]y+/,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                }

                                cFmt11 = cFmt11.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c11"][lenAbbr] = cFmt11;

                                //mdy - mdy
                                cFmt12 = "{date} – {date}";
                                cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date[dmyiLib][lenAbbr]);
                                cFmt12 = cFmt12.replace(/[LM]+/, "{sm}").replace(regExp2,"{sd}").replace(regExp3,"{sy}");
                                cFmt12 = replaceFormats(cFmt12,"{date}", calendar.date[dmyiLib][lenAbbr]);

                                if (lenAbbr === 's') {
                                    cFmt12 = cFmt12.replace(regExp3,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                } else {
                                    cFmt12 = cFmt12.replace(regExp3,"{ey}").replace(/[LM]+/,"{em}").replace(regExp2,"{ed}");
                                }

                                cFmt12 = cFmt12.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c12"][lenAbbr] = cFmt12;

                                //my - my
                                cFmt20 = "{date} – {date}";
                                var myFormat = calendar.date["mys"] ? calendar.date["mys"][lenAbbr] : calendar.date["my"][lenAbbr];
                                cFmt20 = replaceFormats(cFmt20,"{date}", myFormat);
                                cFmt20 = cFmt20.replace(/[LM]+/, "{sm}").replace(regExp3,"{sy}");
                                cFmt20 = replaceFormats(cFmt20, "{date}", myFormat);

                                if (lenAbbr === 's') {
                                    cFmt20 = cFmt20.replace(regExp3,"{ey}").replace(/[LM]+/,"{em}");
                                } else {
                                    cFmt20 = cFmt20.replace(/[^s^\s]y+/,"{ey}").replace(/[LM]+/,"{em}");
                                }
                                cFmt20 = cFmt20.replace(/\'/g,"").replace(/\s\s/g," ");
                                calendar.range["c20"][lenAbbr] = cFmt20;

                                cFmt30 = "{sy} – {ey}";
                                calendar.range["c30"][lenAbbr] = isRtl? "\u200F" + cFmt30 : cFmt30;

                                break;
                            case "ymd":
                                console.log("*** No use cases. [Need to Implement]{time}{date} : " +dmyOrdercldr+"] " + language + "-"+script+ "-"+region +"  ******");
                                break;
                            default:
                                console.log("*** No use cases. Need to Implement]{time}{date} : " +dmyOrdercldr+"] "  + language + "-"+script+ "-"+region +"  ******");
                                break;
                        }
                    }
                }
            }
        }
        if (formats.gregorian) {
            // console.log(JSON.stringify(formats.gregorian.range, undefined, 4));
        }

        return formats;
    },

    createSystemResources: function (cldrData, language, script) {
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

            // now generate all the month names
            var part = cldrCalendar.months.format;
            if (isAsianLang(language)) {
                for (prop in part.wide) {
                    if (language === 'ko') {
                        formats["MMMM" + prop + calendarNameSuffix] = part.wide[prop];
                        formats["N" + prop + calendarNameSuffix] =
                            formats["NN" + prop + calendarNameSuffix] =
                                formats["MMM" + prop + calendarNameSuffix] =
                                    part.abbreviated[prop];
                    } else {
                        formats["MMMM" + prop + calendarNameSuffix] = part.wide[prop].substring(0, part.wide[prop].length-1);
                        formats["N" + prop + calendarNameSuffix] =
                            formats["NN" + prop + calendarNameSuffix] =
                                formats["MMM" + prop + calendarNameSuffix] =
                                    part.abbreviated[prop].substring(0, part.abbreviated[prop].length-1);
                    }
                }
            } else {
                for (prop in part.wide) {
                    formats["MMMM" + prop + calendarNameSuffix] = part.wide[prop];
                    formats["MMM" + prop + calendarNameSuffix] = part.abbreviated[prop];
                    formats["NN" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,2);
                    formats["N" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,1);
                    /* TODO. Some cldr data provide value as number in narrow format which doesn't meet iLib spec.
                             So I update code to create 'N' format value from abbreviated.
                             but I think it's better to reference abbreviated if narrow values are number.
                             and some cases are having same alphabets which are not good.
                     */
                    if (language === "mn") {
                        formats["NN" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,1);
                    } else if (language === "vi") {
                        formats["NN" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,2) + prop;
                        formats["N" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,1) + prop;
                    }
                }
            }
            if (standAloneM(cldrCalendar, script) || standAloneYM(cldrCalendar, script)) {
                part = cldrCalendar.months["stand-alone"];
                for (prop in part.wide) {
                    formats["LLLL" + prop + calendarNameSuffix] = part.wide[prop];
                    formats["LLL" + prop + calendarNameSuffix] = part.abbreviated[prop];
                    if (language === "mn") {
                        formats["LL" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,1);
                        formats["L" + prop + calendarNameSuffix] = part.narrow[prop];
                    } else if (language === "vi") {
                        formats["LL" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,2) + prop;
                        formats["L" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,1) + prop;
                    } else {
                        formats["LL" + prop + calendarNameSuffix] = part.abbreviated[prop].substring(0,2);
                        formats["L" + prop + calendarNameSuffix] = part.narrow[prop];
                    }
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
            if (standAloneW(cldrCalendar, script)) {
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
    createDurationResourceDetail: function (cldrUnitData, durationObject, length, language, script) {
        var durationSysres = {};
        var durationSysresTest = {};

        for(duration in durationObject) {
            var durationKey = "duration-" + duration;
            var temp;
            var fullStr = "";

            if (language === "ko" && duration === "millisecond") {
                fullStr = "#{num}밀리초";
            } else {
                var unitNames = ["zero", "one", "two", "few", "many", "other"];

                for (var j = 0; j < unitNames.length; j++){
                    name = unitNames[j];
                    nameValue = "unitPattern-count-" + name;
                    if (cldrUnitData[durationKey] && typeof(cldrUnitData[durationKey][nameValue]) !== 'undefined') {
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
                    }
                }
            }
            durationSysres[durationObject[duration]] = fullStr;
        }

        return durationSysres;
    },
    createDurationResources: function (cldrData, language, script) {
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
                "millisecond": "durationMediumMillis",
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
        var unit, mergedSysres = {};

        for (var prop in durationObject) {

            switch(prop) {
                case "durationPropertiesFull":
                    unit = table.long;
                    result = module.exports.createDurationResourceDetail(unit, durationObject[prop], "full", language, script);
                    sysres.push(result);
                    break;
                case "durationPropertiesLong":
                    unit = table.short;
                    result = module.exports.createDurationResourceDetail(unit, durationObject[prop], "long", language, script);
                    sysres.push(result);
                    break;
                case "durationPropertiesMedium":
                    unit = table.narrow;
                    result = module.exports.createDurationResourceDetail(unit, durationObject[prop], "medium", language, script);
                    sysres.push(result);
                    break;
                case "durationPropertiesShort":
                    unit = table.narrow;
                    result = module.exports.createDurationResourceDetail(unit, durationObject[prop], "short", language, script);
                    sysres.push(result);
                    break;
            }
        }

        for (i=0; i< sysres.length; i++) {
            mergedSysres = common.merge(mergedSysres, sysres[i]);
        }
        return mergedSysres;
    },

    createSeperatorResources: function (cldrData, language) {
        var mergedSeperatorRes = {};
        var sepKey, fullSepKey;

        var listProperties = {
            "Full" :"listPattern-type-unit",
            "Long" : "listPattern-type-unit-short",
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

    createRelativeFormatResources: function (cldrData, language, script) {
        var relativeObject = {
            "relativeFutureFormatFull" : {
                "second": "1#in 1 second|#in {num} seconds",
                "minute": "1#in 1 minute|#in {num} minutes",
                "hour": "1#in 1 hour|#in {num} hours",
                "day": "1#in 1 day|#in {num} days",
                "week": "1#in 1 week|#in {num} weeks",
                "month": "1#in 1 month|#in {num} months",
                "year": "1#in 1 year|#in {num} years"
            },
            "relativeFutureFormatMedium" : {
                "second": "1#in 1 sec|#in {num} sec",
                "minute": "1#in 1 min|#in {num} min",
                "hour": "1#in 1 hr|#in {num} hrs",
                "day": "1#in 1 dy|#in {num} dys",
                "week": "1#in 1 wk|#in {num} wks",
                "month": "1#in 1 mon|#in {num} mons",
                "year": "1#in 1 yr|#in {num} yrs"
            },
            "relativeFutureFormatShort" : {
                "second": "#in {num}s",
                "minute": "#in {num}mi",
                "hour": "#in {num}h",
                "day": "#in {num}d",
                "week": "#in {num}w",
                "month": "#in {num}mo",
                "year": "#in {num}y"
            },
            "relativePastFormatFull" : {
                "second": "1#1 second ago|#{num} seconds ago",
                "minute": "1#1 minute ago|#{num} minutes ago",
                "hour": "1#1 hour ago|#{num} hours ago",
                "day": "1#1 day ago|#{num} days ago",
                "week": "1#1 week ago|#{num} weeks ago",
                "month": "1#1 month ago|#{num} months ago",
                "year": "1#1 year ago|#{num} years ago"
            },
            "relativePastFormatMedium" : {
                "second": "1#1 sec ago|#{num} sec ago",
                "minute": "1#1 min ago|#{num} min ago",
                "hour": "1#1 hr ago|#{num} hrs ago",
                "day": "1#1 dy ago|#{num} dys ago",
                "week": "1#1 wk ago|#{num} wks ago",
                "month": "1#1 mon ago|#{num} mons ago",
                "year": "1#1 yr ago|#{num} yrs ago"
            },
            "relativePastFormatShort" : {
                "second": "#{num}s ago",
                "minute": "#{num}mi ago",
                "hour": "#{num}h ago",
                "day": "#{num}d ago",
                "week": "#{num}w ago",
                "month": "#{num}mo ago",
                "year": "#{num}y ago"
            }
        };

        var sysres = [];
        var mergedSysres = {};

        for (var prop in relativeObject) {
            switch(prop) {
                case "relativePastFormatFull":
                    result = module.exports.createRelativeFormatDetail(cldrData, relativeObject[prop], "past", "full", language, script);
                    sysres.push(result);
                    break;
                case "relativePastFormatMedium":
                    result = module.exports.createRelativeFormatDetail(cldrData, relativeObject[prop], "past", "long", language, script);
                    sysres.push(result);
                    break;
                case "relativePastFormatShort":
                    result = module.exports.createRelativeFormatDetail(cldrData, relativeObject[prop], "past", "short", language, script);
                    sysres.push(result);
                    break;
                case "relativeFutureFormatFull":
                    result = module.exports.createRelativeFormatDetail(cldrData, relativeObject[prop], "future", "full", language, script);
                    sysres.push(result);
                    break;
                case "relativeFutureFormatMedium":
                    result = module.exports.createRelativeFormatDetail(cldrData, relativeObject[prop], "future", "long", language, script);
                    sysres.push(result);
                    break;
                case "relativeFutureFormatShort":
                    result = module.exports.createRelativeFormatDetail(cldrData, relativeObject[prop], "future", "short", language, script);
                    sysres.push(result);
                    break;
            }
        }

        for (var i=0; i< sysres.length; i++) {
            mergedSysres = common.merge(mergedSysres, sysres[i]);
        }
        return mergedSysres;
    },
    createRelativeFormatDetail: function (cldrDateFieldsData, relativeObject, relation, length, language, script) {
        var relativeSysres = {};
        var dataLength = "";
        var isRtl = (rtlLanguages.indexOf(language) > -1) && (!script || rtlScripts.indexOf(script) > 0);

        switch (length) {
            case 'short':
                dataLength = '-short';
                break;
            case 'medium':
                dataLength = '-narrow';
                break;
            case 'long':
            case 'full':
                break;
        }

        for (obj in relativeObject) {
            var unitKey = obj + dataLength;
            var typeKey = "relativeTime-type-" + relation;
            var temp;
            var fullStr = "";

            var plurals = ['zero', 'one', 'two', 'few', 'many', 'other'];

            for (var plural of plurals) {
                stringKey = "relativeTimePattern-count-" + plural;
                if (typeof(cldrDateFieldsData[unitKey][typeKey][stringKey]) !== 'undefined') {
                    if (fullStr.length > 0) {
                        fullStr += "|";
                    }

                    temp = cldrDateFieldsData[unitKey][typeKey][stringKey].replace("{0}", "{num}");
                    if (isRtl) {
                        temp = "\u200F" + temp;
                    }

                    // work around a bug in cldr
                    if (language === "ha" && temp.endsWith("}}")) {
                        temp = temp.replace(/\}\}$/, "}");
                    }

                    if (plural === "other") {
                        fullStr += "#" + temp;
                    } else {
                        fullStr += plural +"#" + temp;
                    }
                }
            }
            relativeSysres[relativeObject[obj]] = fullStr;
        }
        return relativeSysres;
    },

    createDayPeriods: function (dayPeriods, cldrData, language, region) {
        var calendarNameSuffix, periodArray = [];

        var formats = {
            periods: {
                dayPeriods: [],
            },
            sysres: {}
        };

        function parsePeriod(period) {
            var parts = period.split(":");
            var hour = parseInt(parts[0]);
            var minute = parseInt(parts[1]);
            return hour * 60 + minute;
        }

        function pushPeriod(period, name) {
            periodArray.push(typeof(period._at) !== 'undefined' ?
                {
                    name: name,
                    at: parsePeriod(period._at)
                } :
                {
                    name: name,
                    from: parsePeriod(period._from),
                    to: parsePeriod(period._before)
                }
            );
        }

        function findPeriods(dayPeriods, locale) {
            if (!dayPeriods[locale]) return;
            for (var name in dayPeriods[locale]) {
                var period = dayPeriods[locale][name];
                pushPeriod(period, name);
            }
        }

        if (dayPeriods[language] && Object.keys(dayPeriods[language]).length > 1) {
            findPeriods(dayPeriods, "und");
            findPeriods(dayPeriods, language);
            findPeriods(dayPeriods, language + "-" + region);

            // sort by start time of the period
            periodArray.sort(function(left, right) {
                var value = (typeof(left.at) !== 'undefined' ? left.at : left.from) -
                    (typeof(right.at) !== 'undefined' ? right.at : right.from);
                if (!value) {
                    value = (typeof(left.at) !== 'undefined' ? left.at : left.to) -
                    (typeof(right.at) !== 'undefined' ? right.at : right.to)
                }
                return value;
            });

            formats.periods.dayPeriods = periodArray.map(function(period) {
                if (typeof(period.at) !== 'undefined') {
                    return { at: period.at };
                } else {
                    return {
                        from: period.from,
                        to: period.to
                    };
                }
            });

            var sysres = formats.sysres;
            for (var calendarName in cldrData) {
                calendarNameSuffix = (calendarName !== "gregorian") ? "-" + calendarName : "";
                var periods = cldrData[calendarName].dayPeriods.format.wide;

                periodArray.forEach(function(period, index) {
                    sysres['B' + index + calendarNameSuffix] = periods[period.name];
                });
            }

            return formats;
        }

        return undefined;
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
            if (!distances["und"]) distances["und"] = {};
            for (right in group) {
                if (right && right !== "data" && "und" !== right && group[right]) {
                    if (typeof(distances["und"][right]) === "undefined") {
                        distances["und"][right] = module.exports.distance(group.data || {}, group[right].data);
                        if (!distances[right]) distances[right] = {};
                        // distance is reflexive
                        distances[right]["und"] = distances["und"][right];
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
        if (totals[0].name === "und") {
            // already the minimum, so we don't need to do anything
            return;
        }

        console.log("Promoting " + totals[0].name + "/" + filename + " to " + parentName);
        // promote a child as the new root, dropping the current root
        group.data = group[totals[0].name].data;
    },

    pruneFormatsChild: function(parent, child) {
        console.log(".");

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
        var contents = JSON.stringify(group.data, undefined, 4); // to filter out `{\n}` case
        // don't write out empty files!
        if (group.data && contents !== "{}") {
            console.log(localeComponents.join("-") + " ");

            makeDirs(dir);
            fs.writeFileSync(filename, stringify(group.data, {space: 4}), 'utf8');
        }

        for (var comp in group) {
            if (comp && comp !== "data" && comp !== "merged") {
                module.exports.writeFormats(outputDir, outfile, group[comp], localeComponents.concat([comp]));
            }
        }
    }
};
