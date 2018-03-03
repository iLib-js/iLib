/**
 * ilib-unpack.js - Unpack a set of ilib routines webpacked into a
 * single file back into the global scope.
 *
 * @license
 * Copyright © 2018, JEDLSoft
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

// WARNING: this assumes you have already included ilib-*.js into your html

var ilib = require("./ilib.js");

var top = ilib._top();

var exportClassesPublic = [
    "DateRngFmt",
    "IDate",
    "DateFactory",
    "HebrewDate",
    "HebrewCal",
    "IslamicCal",
    "IslamicDate",
    "JulianCal",
    "JulianDate",
    "GregorianCal",
    "GregorianDate",
    "ThaiSolarCal",
    "ThaiSolarDate",
    "PersianCal",
    "PersianDate",
    "PersianAlgoCal",
    "PersianAlgoDate",
    "HanCal",
    "HanDate",
    "EthiopicCal",
    "EthiopicDate",
    "CopticCal",
    "CopticDate",
    "INumber",
    "NumFmt",
    "JulianDay",
    "DateFmt",
    "Calendar",
    "CalendarFactory",
    "Utils",
    "Locale",
    "IString",
    "DurationFmt",
    "ResBundle",
    "CType",
    "LocaleInfo",
    "DateRngFmt",
    "isAlnum",
    "isAlpha",
    "isAscii",
    "isBlank",
    "isCntrl",
    "isDigit",
    "isGraph",
    "isIdeo",
    "isLower",
    "isPrint",
    "isPunct",
    "isSpace",
    "isUpper",
    "isXdigit",
    "isScript",
    "ScriptInfo",
    "Name",
    "NameFmt",
    "Address",
    "AddressFmt",
    "Collator",
    "LocaleMatcher",
    "NormString",
    "CaseMapper",
    "GlyphString",
    "PhoneFmt",
    "PhoneGeoLocator",
    "PhoneNumber",
    "Measurement",
    "MeasurementFactory",
    "UnitFmt",
    "LengthUnit",
    "VelocityUnit",
    "DigitalStorageUnit",
    "TemperatureUnit",
    "UnknownUnit",
    "TimeUnit",
    "MassUnit",
    "AreaUnit",
    "FuelConsumptionUnit",
    "VolumeUnit",
    "EnergyUnit",
    "Charset",
    "Charmap",
    "CharmapFactory",
    "CharmapTable",
    "UTF8",
    "UTF16BE",
    "UTF16LE",
    "Country",
    "ListFmt",
    "AlphabeticIndex",
    "TimeZone",
    "Currency"
];

if (top) {
    // these are the private classes that the unit tests may need
    var exportClasses = exportClassesPublic.concat([
        "ISet",
        "SearchUtils",
        "MathUtils",
        "JSUtils",
        "Path",
        "Astro",
        "Utils",
        "CodePointSource",
        "CopticRataDie",
        "ElementIterator",
        "EthiopicRataDie",
        "GregRataDie",
        "HanRataDie",
        "NumberingPlan",
        "PersAlgoRataDie",
        "PersRataDie",
        "PhoneHandlerFactory",
        "PhoneLocale",
        "RataDie"
    ]);

    exportClasses.forEach(function(className) {
        // console.log("Defining " + className);
        if (typeof(ilib[className]) !== 'undefined') {
            top[className] = ilib[className];
        }
    });
} else {
    throw "No global scope on this platform. You cannot use ilib-unpack here to unpack ilib into the global scope because it does not exist.";
}

module.exports = exportClassesPublic;
