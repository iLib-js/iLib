/**
 * ilib-unpack.js - Unpack a set of ilib routines webpacked into a 
 * single file back into the global space.
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

if (typeof(window.ilib) === 'object') {
    var exportClasses = [
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
        "nfkc/all",
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
        "AlphabeticIndex"
    ];
    
    exportedClasses.forEach(function(className) {
        if (typeof(ilib[className]) !== 'undefined') {
            window[className] = ilib[className];
        }
    });
} else {
    throw "No ilib defined. This is probably because ilib-unpack.js was included before ilib-*.js in your html. Please rearrange your html script tags to include the webpacked ilib first.";
}
