/**
 * ilib-demo-webpack.js - metafile that includes all of the other js files 
 * for the demo site
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

var ilib = require("../ilib.js");

ilib.DateRngFmt = require("../DateRngFmt.js");
ilib.IDate = require("../IDate.js");
ilib.DateFactory = require("../DateFactory.js");
ilib.HebrewDate = require("../HebrewDate.js");
ilib.HebrewCal = require("../HebrewCal.js");
ilib.IslamicCal = require("../IslamicCal.js");
ilib.IslamicDate = require("../IslamicDate.js");
ilib.JulianCal = require("../JulianCal.js");
ilib.JulianDate = require("../JulianDate.js");
ilib.GregorianCal = require("../GregorianCal.js");
ilib.GregorianDate = require("../GregorianDate.js");
ilib.ThaiSolarCal = require("../ThaiSolarCal.js");
ilib.ThaiSolarDate = require("../ThaiSolarDate.js");
ilib.PersianCal = require("../PersianCal.js");
ilib.PersianDate = require("../PersianDate.js");
ilib.PersianAlgoCal = require("../PersianAlgoCal.js");
ilib.PersianAlgoDate = require("../PersianAlgoDate.js");
ilib.HanCal = require("../HanCal.js");
ilib.HanDate = require("../HanDate.js");
ilib.EthiopicCal = require("../EthiopicCal.js");
ilib.EthiopicDate = require("../EthiopicDate.js");
ilib.CopticCal = require("../CopticCal.js");
ilib.CopticDate = require("../CopticDate.js");
ilib.INumber = require("../INumber.js");
ilib.NumFmt = require("../NumFmt.js");
ilib.JulianDay = require("../JulianDay.js");
ilib.DateFmt = require("../DateFmt.js");
ilib.Calendar = require("../Calendar.js");
ilib.CalendarFactory = require("../CalendarFactory.js");
ilib.Utils = require("../Utils.js");
ilib.Locale = require("../Locale.js");
ilib.IString = require("../IString.js");
ilib.DurationFmt = require("../DurationFmt.js");
ilib.ResBundle = require("../ResBundle.js");
ilib.CType = require("../CType.js");
ilib.LocaleInfo = require("../LocaleInfo.js");
ilib.DateRngFmt = require("../DateRngFmt.js");
ilib.isAlnum = require("../isAlnum.js");
ilib.isAlpha = require("../isAlpha.js");
ilib.isAscii = require("../isAscii.js");
ilib.isBlank = require("../isBlank.js");
ilib.isCntrl = require("../isCntrl.js");
ilib.isDigit = require("../isDigit.js");
ilib.isGraph = require("../isGraph.js");
ilib.isIdeo = require("../isIdeo.js");
ilib.isLower = require("../isLower.js");
ilib.isPrint = require("../isPrint.js");
ilib.isPunct = require("../isPunct.js");
ilib.isSpace = require("../isSpace.js");
ilib.isUpper = require("../isUpper.js");
ilib.isXdigit = require("../isXdigit.js");
ilib.isScript = require("../isScript.js");
ilib.ScriptInfo = require("../ScriptInfo.js");
ilib.Name = require("../Name.js");
ilib.NameFmt = require("../NameFmt.js");
ilib.Address = require("../Address.js");
ilib.AddressFmt = require("../AddressFmt.js");
ilib.Collator = require("../Collator.js");
ilib.data.nfkc = require("../nfkc/all.js");
ilib.LocaleMatcher = require("../LocaleMatcher.js");
ilib.NormString = require("../NormString.js");
ilib.CaseMapper = require("../CaseMapper.js");
ilib.GlyphString = require("../GlyphString.js");
ilib.PhoneFmt = require("../PhoneFmt.js");
ilib.PhoneGeoLocator = require("../PhoneGeoLocator.js");
ilib.PhoneNumber = require("../PhoneNumber.js");
ilib.Measurement = require("../Measurement.js");
ilib.MeasurementFactory = require("../MeasurementFactory.js");
ilib.UnitFmt = require("../UnitFmt.js");
ilib.LengthUnit = require("../LengthUnit.js");
ilib.VelocityUnit = require("../VelocityUnit.js");
ilib.DigitalStorageUnit = require("../DigitalStorageUnit.js");
ilib.TemperatureUnit = require("../TemperatureUnit.js");
ilib.UnknownUnit = require("../UnknownUnit.js");
ilib.TimeUnit = require("../TimeUnit.js");
ilib.MassUnit = require("../MassUnit.js");
ilib.AreaUnit = require("../AreaUnit.js");
ilib.FuelConsumptionUnit = require("../FuelConsumptionUnit.js");
ilib.VolumeUnit = require("../VolumeUnit.js");
ilib.EnergyUnit = require("../EnergyUnit.js");
ilib.Charset = require("../Charset.js");
ilib.Charmap = require("../Charmap.js");
ilib.CharmapFactory = require("../CharmapFactory.js");
ilib.CharmapTable = require("../CharmapTable.js");
ilib.UTF8 = require("../UTF8.js");
ilib.UTF16BE = require("../UTF16BE.js");
ilib.UTF16LE = require("../UTF16LE.js");
ilib.Country = require("../Country.js");
ilib.ListFmt = require("../ListFmt.js");
ilib.AlphabeticIndex = require("../AlphabeticIndex.js");

// This unpacks the above classes to the global scope
require("../ilib-unpack.js");

// Must be at the end of meta file
require("../ilib-getdata.js");

module.exports = ilib;