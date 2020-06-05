/*
 * genphoneloc.js - ilib tool to generate the json phoneloc information
 *
 * Copyright © 2019-2020 JEDLSoft
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

// https://en.wikipedia.org/wiki/Mobile_country_code
var mccToreg = {
    //"289": "GE-AB", //?
    "412": "AF",
    "276": "AL",
    "603": "DZ",
    "544": "AS",
    "213": "AD",
    "631": "AO",
    "365": "AI",
    "344": "AG",
    "722": "AR",
    "283": "AM",
    "363": "AW",
    "505": "AU",
    "232": "AT",
    "400": "AZ",
    "364": "BS",
    "426": "BH",
    "470": "BD",
    "342": "BB",
    "257": "BY",
    "206": "BE",
    "702": "BZ",
    "616": "BJ",
    "350": "BM",
    "402": "BT",
    "736": "BO",
    "362": "BQ",
    "218": "BA",
    "652": "BW",
    "724": "BR",
    "995": "IO",
    "348": "VG",
    "528": "BN",
    "284": "BG",
    "613": "BF",
    "642": "BI",
    "456": "KH",
    "624": "CM",
    "302": "CA",
    "625": "CV",
    "346": "KY",
    "623": "CF",
    "622": "TD",
    "730": "CL",
    "460": "CN",
    "461": "CN",
    "732": "CO",
    "654": "KM",
    "629": "CG",
    "548": "CK",
    "712": "CR",
    "219": "HR",
    "368": "CU",
    "362": "CW",
    "280": "CY",
    "230": "CZ",
    "630": "CD",
    "238": "DK",
    "638": "DJ",
    "366": "DM",
    "370": "DO",
    "514": "TL",
    "740": "EC",
    "602": "EG",
    "706": "SV",
    "627": "GQ",
    "657": "ER",
    "248": "EE",
    "636": "ET",
    "750": "FK",
    "288": "FO",
    "542": "FJ",
    "244": "FI",
    "208": "FR",
    "742": "GF",
    "647": "RE",
    "647": "YT",
    "547": "PF",
    "628": "GA",
    "607": "GM",
    "282": "GE",
    "262": "DE",
    "620": "GH",
    "266": "GI",
    "202": "GR",
    "290": "GL",
    "352": "GD",
    "340": "GP",
    //"310": "GU",
    "311": "GU",
    "704": "GT",
    "234": "GG",
    "611": "GN",
    "632": "GW",
    "738": "GY",
    "372": "HT",
    "708": "HN",
    "454": "HK",
    "216": "HU",
    "274": "IS",
    "404": "IN",
    "405": "IN",
    "406": "IN",
    "510": "ID",
    "432": "IR",
    "418": "IQ",
    "272": "IE",
    "234": "IM",
    "425": "IL",
    "222": "IT",
    "612": "CI",
    "338": "JM",
    "440": "JP",
    "441": "JP",
    "234": "JE",
    "416": "JO",
    "401": "KZ",
    "639": "KE",
    "545": "KI",
    "467": "KP",
    "450": "KR",
    "221": "XK",
    "419": "KW",
    "437": "KG",
    "457": "LA",
    "247": "LV",
    "415": "LB",
    "651": "LS",
    "618": "LR",
    "606": "LY",
    "295": "LI",
    "246": "LT",
    "270": "LU",
    "455": "MO",
    "294": "MK",
    "646": "MG",
    "650": "MW",
    "502": "MY",
    "472": "MV",
    "610": "ML",
    "278": "MT",
    "551": "MH",
    "340": "MQ",
    "609": "MR",
    "617": "MU",
    "334": "MX",
    "550": "FM",
    "259": "MD",
    "212": "MC",
    "428": "MN",
    "297": "ME",
    "354": "MS",
    "604": "MA",
    "643": "MZ",
    "414": "MM",
    "649": "NA",
    "536": "NR",
    "429": "NP",
    "204": "NL",
    "546": "NC",
    "530": "NZ",
    "710": "NI",
    "614": "NE",
    "621": "NG",
    "555": "NU",
    //"505": "NF",
    //"310": "MP",
    "242": "NO",
    "422": "OM",
    "410": "PK",
    "552": "PW",
    "425": "PS",
    "714": "PA",
    "537": "PG",
    "744": "PY",
    "716": "PE",
    "515": "PH",
    "260": "PL",
    "268": "PT",
    "330": "PR",
    "427": "QA",
    "226": "RO",
    "250": "RU",
    "635": "RW",
    "340": "BL",
    "658": "SH",
    "356": "KN",
    "358": "LC",
    "340": "MF",
    "308": "PM",
    "360": "VC",
    "549": "WS",
    "292": "SM",
    "626": "ST",
    "420": "SA",
    "608": "SN",
    "220": "RS",
    "633": "SC",
    "619": "SL",
    "525": "SG",
    "362": "SX",
    "231": "SK",
    "293": "SI",
    "540": "SB",
    "637": "SO",
    "655": "ZA",
    "659": "SS",
    "214": "ES",
    "413": "LK",
    "634": "SD",
    "746": "SR",
    "653": "SZ",
    "240": "SE",
    "228": "CH",
    "417": "SY",
    "466": "TW",
    "436": "TJ",
    "640": "TZ",
    "520": "TH",
    "615": "TG",
    "554": "TK",
    "539": "TO",
    "374": "TT",
    "605": "TN",
    "286": "TR",
    "438": "TM",
    "376": "TC",
    "553": "TV",
    "641": "UG",
    "255": "UA",
    "424": "AE",
    "430": "AE",
    "431": "AE",
    "234": "GB",
    "235": "GB",
    "310": "US",
    "311": "US",
    "312": "US",
    "313": "US",
    "314": "US",
    "315": "US",
    "316": "US",
    "332": "VI",
    "748": "UY",
    "434": "UZ",
    "541": "VU",
    "734": "VE",
    "452": "VN",
    "543": "WF",
    "421": "YE",
    "645": "ZM",
    "648": "ZW"    
}

var areaToreg = {
    "1": {
        "default": "US",
        "204": "CA",
        "226": "CA",
        "242": "BS",
        "246": "BB",
        "250": "CA",
        "264": "AI",
        "268": "AG",
        "268": "AG",
        "284": "VG",
        "289": "CA",
        "306": "CA",
        "340": "VI",
        "343": "CA",
        "345": "KY",
        "403": "CA",
        "416": "CA",
        "418": "CA",
        "438": "CA",
        "441": "BM",
        "450": "CA",
        "473": "GD",
        "506": "CA",
        "514": "CA",
        "519": "CA",
        "579": "CA",
        "581": "CA",
        "587": "CA",
        "587": "CA",
        "604": "CA",
        "613": "CA",
        "647": "CA",
        "649": "TC",
        "664": "MS",
        "670": "MP",
        "671": "GU",
        "684": "AS",
        "705": "CA",
        "709": "CA",
        "721": "AN",
        "758": "LC",
        "767": "DM",
        "778": "CA",
        "778": "CA",
        "780": "CA",
        "784": "VC",
        "787": "PR",
        "807": "CA",
        "809": "DO",
        "819": "CA",
        "829": "DO",
        "849": "DO",
        "867": "CA",
        "868": "TT",
        "869": "KN",
        "876": "JM",
        "902": "CA",
        "905": "CA",
        "939": "PR"
    },
    "33": {
        "default": "FR",
        "262": "RE",
        "508": "PM",
        "590": "GP",
        "594": "GF",
        "596": "MQ" 
    },
    "39": {
        "default": "IT",
        "549": "SM"
    }
}

var fs = require('fs');
var util = require('util');
var path = require('path');
var common = require('../cldr/common.js');
var mkdirs = common.makeDirs;

var toDir = "tmp";

if (process.argv.length > 2) {
    toDir = process.argv[2];
}

function usage() {
    console.log("Usage: genphoneloc.js [-h] [ output_dir ]\n" +
            "-h or --help\n" + "  this help");
    process.exit(1);
}

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

console.log("genphoneloc.js - generate the phoneloc.json file.");
var metadata = require("./libphonenumber-js/metadata.json");
var countryData = metadata.countries;
var callingCode = metadata.country_calling_codes;
var phoneLocData = {};
phoneLocData["mcc2reg"] = mccToreg;
phoneLocData["mcc2cc"] = {};
phoneLocData["reg2cc"] = {};
phoneLocData["cc2reg"] = {};
phoneLocData["area2reg"] = {};

for (mccNum in mccToreg) {
    if (!fs.existsSync(toDir)) {
        mkdirs(toDir);
    }

    country = mccToreg[mccNum];
    //console.log("country: ", country);
    phoneLocData["mcc2cc"][mccNum] =  countryData[country]["phone_code"];
}

/*
for (country in countryData) {
    var phoneCode = countryData[country]["phone_code"];
    phoneLocData["reg2cc"][country] = phoneCode;
    phoneLocData["cc2reg"][phoneCode] = country;
}*/

for (number in callingCode) {
    var country = callingCode[number][0]; // choose one.
    phoneLocData["cc2reg"][number] = country;
    phoneLocData["reg2cc"][country] = number;
}

phoneLocData["area2reg"] = areaToreg;

var file = path.join(toDir, "phoneloc.json");
fs.writeFileSync(file, JSON.stringify(phoneLocData, true, 4), "utf-8");

console.log("Done.");