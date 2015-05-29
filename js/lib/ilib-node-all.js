/* jshint node: true */
/*
 * ilib-node-all.js - convenience glue code for node to pre-require() 
 * all classes and export them all at the same time
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

var NodeLoader = require("../lib/NodeLoader.js");
var ilib = require("../lib/ilib.js").ilib;
ilib.setLoaderCallback(NodeLoader(ilib));

// require everything so that it is available
ilib.Utils = require("../lib/Utils.js");
ilib.JSUtils = require("../lib/JSUtils.js");
ilib.MathUtils = require("../lib/MathUtils.js");
ilib.SearchUtils = require("../lib/SearchUtils.js");

ilib.Locale = require("../lib/Locale.js");
ilib.LocaleInfo = require("../lib/LocaleInfo.js");
ilib.LocaleMatcher = require("../lib/LocaleMatcher.js");
ilib.CaseMapper = require("../lib/CaseMapper.js");
ilib.IString = require("../lib/IString.js");
ilib.ResBundle = require("../lib/ResBundle.js");
ilib.JulianDay = require("../lib/JulianDay.js");
ilib.TimeZone = require("../lib/TimeZone.js");
ilib.DateFactory = require("../lib/DateFactory.js");
ilib.CalendarFactory = require("../lib/CalendarFactory.js");
ilib.DateFmt = require("../lib/DateFmt.js");
ilib.DateRngFmt = require("../lib/DateRngFmt.js");
ilib.DurationFmt = require("../lib/DurationFmt.js");
ilib.GregorianCal = require("../lib/GregorianCal.js");
ilib.GregorianDate = require("../lib/GregorianDate.js");
ilib.HebrewCal = require("../lib/HebrewCal.js");
ilib.HebrewDate = require("../lib/HebrewDate.js");
ilib.IslamicCal = require("../lib/IslamicCal.js");
ilib.IslamicDate = require("../lib/IslamicDate.js");
ilib.JulianCal = require("../lib/JulianCal.js");
ilib.JulianDate = require("../lib/JulianDate.js");
ilib.ThaiSolarCal = require("../lib/ThaiSolarCal.js");
ilib.ThaiSolarDate = require("../lib/ThaiSolarDate.js");
ilib.PersianCal = require("../lib/PersianCal.js");
ilib.PersianDate = require("../lib/PersianDate.js");
ilib.PersianAlgoCal = require("../lib/PersianAlgoCal.js");
ilib.PersianAlgoDate = require("../lib/PersianAlgoDate.js");
ilib.HanCal = require("../lib/HanCal.js");
ilib.HanDate = require("../lib/HanDate.js");
ilib.EthiopicCal = require("../lib/EthiopicCal.js");
ilib.EthiopicDate = require("../lib/EthiopicDate.js");
ilib.CopticCal = require("../lib/CopticCal.js");
ilib.CopticDate = require("../lib/CopticDate.js");
ilib.Currency = require("../lib/Currency.js");
ilib.INumber = require("../lib/INumber.js");
ilib.NumFmt = require("../lib/NumFmt.js");
ilib.CType = require("../lib/CType.js");
ilib.isDigit = require("../lib/isDigit.js");
ilib.isSpace = require("../lib/isSpace.js");
ilib.isAlpha = require("../lib/isAlpha.js");
ilib.isAlnum = require("../lib/isAlnum.js");
ilib.isAscii = require("../lib/isAscii.js");
ilib.isBlank = require("../lib/isBlank.js");
ilib.isCntrl = require("../lib/isCntrl.js");
ilib.isGraph = require("../lib/isGraph.js");
ilib.isIdeo = require("../lib/isIdeo.js");
ilib.isLower = require("../lib/isLower.js");
ilib.isPrint = require("../lib/isPrint.js");
ilib.isPunct = require("../lib/isPunct.js");
ilib.isUpper = require("../lib/isUpper.js");
ilib.isXdigit = require("../lib/isXdigit.js");
ilib.isScript = require("../lib/isScript.js");
ilib.ScriptInfo = require("../lib/ScriptInfo.js");
ilib.Name = require("../lib/Name.js");
ilib.NameFmt = require("../lib/NameFmt.js");
ilib.Address = require("../lib/Address.js");
ilib.AddressFmt = require("../lib/AddressFmt.js");
ilib.GlyphString = require("../lib/GlyphString.js");
ilib.NormString = require("../lib/NormString.js");
ilib.Collator = require("../lib/Collator.js");
ilib.PhoneNumber = require("../lib/PhoneNumber.js");
ilib.PhoneFmt = require("../lib/PhoneFmt.js");
ilib.PhoneGeoLocator = require("../lib/PhoneGeoLocator.js");
ilib.MeasurementFactory = require("../lib/MeasurementFactory.js");
ilib.UnknownUnit = require("../lib/UnknownUnit.js");
ilib.AreaUnit = require("../lib/AreaUnit.js");
ilib.DigitalStorageUnit = require("../lib/DigitalStorageUnit.js");
ilib.EnergyUnit = require("../lib/EnergyUnit.js");
ilib.FuelConsumptionUnit = require("../lib/FuelConsumptionUnit.js");
ilib.LengthUnit = require("../lib/LengthUnit.js");
ilib.MassUnit = require("../lib/MassUnit.js");
ilib.TemperatureUnit = require("../lib/TemperatureUnit.js");
ilib.TimeUnit = require("../lib/TimeUnit.js");
ilib.SpeedUnit = require("../lib/VelocityUnit.js");
ilib.VolumeUnit = require("../lib/VolumeUnit.js");
ilib.UnitFmt = require("../lib/UnitFmt.js");

module.exports = ilib;
