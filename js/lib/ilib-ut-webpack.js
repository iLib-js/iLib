/**
 * ilib-ut-webpack.js - metafile that includes all of the other js files that
 * the unit tests need
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

/* !data
charset/ISO-10646-UCS-2
charset/UTF-16BE
charset/UTF-16
charset/UTF-16LE
charset/UTF-8
charset/ISO-8859-1
charset/EUC-JP
charset/Shift_JIS
charset/ISO-8859-15
*/

var ilib = require("./ilib.js");

ilib.DateRngFmt = require("./DateRngFmt.js");
ilib.IDate = require("./IDate.js");
ilib.DateFactory = require("./DateFactory.js");
ilib.HebrewDate = require("./HebrewDate.js");
ilib.HebrewCal = require("./HebrewCal.js");
ilib.IslamicCal = require("./IslamicCal.js");
ilib.IslamicDate = require("./IslamicDate.js");
ilib.JulianCal = require("./JulianCal.js");
ilib.JulianDate = require("./JulianDate.js");
ilib.GregorianCal = require("./GregorianCal.js");
ilib.GregorianDate = require("./GregorianDate.js");
ilib.ThaiSolarCal = require("./ThaiSolarCal.js");
ilib.ThaiSolarDate = require("./ThaiSolarDate.js");
ilib.PersianAlgoCal = require("./PersianAlgoCal.js");
ilib.PersianAlgoDate = require("./PersianAlgoDate.js");
ilib.PersianDate = require("./PersianDate.js");
ilib.PersianCal = require("./PersianCal.js");
ilib.HanCal = require("./HanCal.js");
ilib.HanDate = require("./HanDate.js");
ilib.EthiopicCal = require("./EthiopicCal.js");
ilib.EthiopicDate = require("./EthiopicDate.js");
ilib.CopticCal = require("./CopticCal.js");
ilib.CopticDate = require("./CopticDate.js");
ilib.INumber = require("./INumber.js");
ilib.NumFmt = require("./NumFmt.js");
ilib.JulianDay = require("./JulianDay.js");
ilib.DateFmt = require("./DateFmt.js");
ilib.Calendar = require("./Calendar.js");
ilib.CalendarFactory = require("./CalendarFactory.js");
ilib.Utils = require("./Utils.js");
ilib.Locale = require("./Locale.js");
ilib.nfkc_all = require("./nfkc/all.js");
ilib.IString = require("./IString.js");
ilib.DurationFmt = require("./DurationFmt.js");
ilib.ResBundle = require("./ResBundle.js");
ilib.CType = require("./CType.js");
ilib.LocaleInfo = require("./LocaleInfo.js");
ilib.DateRngFmt = require("./DateRngFmt.js");
ilib.isAlnum = require("./isAlnum.js");
ilib.isAlpha = require("./isAlpha.js");
ilib.isAscii = require("./isAscii.js");
ilib.isBlank = require("./isBlank.js");
ilib.isCntrl = require("./isCntrl.js");
ilib.isDigit = require("./isDigit.js");
ilib.isGraph = require("./isGraph.js");
ilib.isIdeo = require("./isIdeo.js");
ilib.isLower = require("./isLower.js");
ilib.isPrint = require("./isPrint.js");
ilib.isPunct = require("./isPunct.js");
ilib.isScript = require("./isScript.js");
ilib.isSpace = require("./isSpace.js");
ilib.isUpper = require("./isUpper.js");
ilib.isXdigit = require("./isXdigit.js");
ilib.ScriptInfo = require("./ScriptInfo.js");
ilib.Name = require("./Name.js");
ilib.NameFmt = require("./NameFmt.js");
ilib.Address = require("./Address.js");
ilib.AddressFmt = require("./AddressFmt.js");
ilib.Collator = require("./Collator.js");
ilib.LocaleMatcher = require("./LocaleMatcher.js");
ilib.NormString = require("./NormString.js");
ilib.StringMapper = require("./StringMapper.js");
ilib.CaseMapper = require("./CaseMapper.js");
ilib.GlyphString = require("./GlyphString.js");
ilib.PhoneNumber = require("./PhoneNumber.js");
ilib.PhoneFmt = require("./PhoneFmt.js");
ilib.PhoneGeoLocator = require("./PhoneGeoLocator.js");
ilib.Measurement = require("./Measurement.js");
ilib.MeasurementFactory = require("./MeasurementFactory.js");
ilib.UnitFmt = require("./UnitFmt.js");
ilib.LengthUnit = require("./LengthUnit.js");
ilib.VelocityUnit = require("./VelocityUnit.js");
ilib.TemperatureUnit = require("./TemperatureUnit.js");
ilib.DigitalStorageUnit = require("./DigitalStorageUnit.js");
ilib.UnknownUnit = require("./UnknownUnit.js");
ilib.TimeUnit = require("./TimeUnit.js");
ilib.MassUnit = require("./MassUnit.js");
ilib.AreaUnit = require("./AreaUnit.js");
ilib.FuelConsumptionUnit = require("./FuelConsumptionUnit.js");
ilib.VolumeUnit = require("./VolumeUnit.js");
ilib.EnergyUnit = require("./EnergyUnit.js");
ilib.Charset = require("./Charset.js");
ilib.ListFmt = require("./ListFmt.js");
ilib.Country = require("./Country.js");
ilib.CaseMapper = require("./CaseMapper.js");
ilib.Charset = require("./Charset.js");
ilib.Charmap = require("./Charmap.js");
ilib.CharmapFactory = require("./CharmapFactory.js");
ilib.CharmapTable = require("./CharmapTable.js");
ilib.UTF8 = require("./UTF8.js");
ilib.UTF16BE = require("./UTF16BE.js");
ilib.UTF16LE = require("./UTF16LE.js");
ilib.AlphabeticIndex = require("./AlphabeticIndex.js");
ilib.TimeZone = require("./TimeZone.js");
ilib.Currency = require("./Currency.js");

/* not exposed... these are here to force the charmap data to be included */
ilib.charmaps_Jpan = require("./charmaps/Jpan.js");
ilib.charmaps_Kore = require("./charmaps/Kore.js");
ilib.charmaps_Hans = require("./charmaps/Hans.js");
ilib.charmaps_Hant = require("./charmaps/Hant.js");
ilib.charmaps_general = require("./charmaps/general.js");

/*
!data
charset/ISO-10646-UCS-2
charset/UTF-16BE
charset/UTF-16
charset/UTF-16LE
charset/UTF-8
charset/ISO-8859-1
charset/EUC-JP
charset/Shift_JIS
charset/ISO-8859-15
*/

/* private classes used in the tests */
ilib.ISet = require("./ISet.js");
ilib.SearchUtils = require("./SearchUtils.js");
ilib.MathUtils = require("./MathUtils.js");
ilib.JSUtils = require("./JSUtils.js");
ilib.Path = require("./Path.js");
ilib.Astro = require("./Astro.js");
ilib.Utils = require("./Utils.js");
ilib.CodePointSource = require("./CodePointSource.js");
ilib.CopticRataDie = require("./CopticRataDie.js");
ilib.ElementIterator = require("./ElementIterator.js");
ilib.EthiopicRataDie = require("./EthiopicRataDie.js");
ilib.GregRataDie = require("./GregRataDie.js");
ilib.HanRataDie = require("./HanRataDie.js");
ilib.NumberingPlan = require("./NumberingPlan.js");
ilib.PersAlgoRataDie = require("./PersAlgoRataDie.js");
ilib.PersRataDie = require("./PersRataDie.js");
ilib.PhoneHandlerFactory = require("./PhoneHandlerFactory.js");
ilib.PhoneLocale = require("./PhoneLocale.js");
ilib.RataDie = require("./RataDie.js");

module.exports = ilib;