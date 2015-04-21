/* jshint node: true */
/*
 * ilib-test.js - glue code for node to load local assembled ilib code 
 * statically and the data dynamically 
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
ilib.setLoaderCallback(NodeLoader(ilib));

//initialize some things statically because the constructors do not load 
//the locale-independent data
CType._init(true);
NormString.init();

var moduleMap = {
	"AddressFmt.js": AddressFmt,
	"Address.js": Address,
	"AreaUnit.js": AreaUnit,
	"Astro.js": Astro,
	"CalendarFactory.js": CalendarFactory,
	"Calendar.js": Calendar,
	"CaseMapper.js": CaseMapper,
	"CodePointSource.js": CodePointSource,
	"Collator.js": Collator,
	"CopticCal.js": CopticCal,
	"CopticDate.js": CopticDate,
	"CopticRataDie.js": CopticRataDie,
	"CType.js": CType,
	"Currency.js": Currency,
	"DateFactory.js": DateFactory,
	"DateFmt.js": DateFmt,
	"DateRngFmt.js": DateRngFmt,
	"DigitalStorageUnit.js": DigitalStorageUnit,
	"DurationFmt.js": DurationFmt,
	"ElementIterator.js": ElementIterator,
	"EnergyUnit.js": EnergyUnit,
	"EthiopicCal.js": EthiopicCal,
	"EthiopicDate.js": EthiopicDate,
	"EthiopicRataDie.js": EthiopicRataDie,
	"FuelConsumptionUnit.js": FuelConsumptionUnit,
	"GlyphString.js": GlyphString,
	"GregorianCal.js": GregorianCal,
	"GregorianDate.js": GregorianDate,
	"GregRataDie.js": GregRataDie,
	"HanCal.js": HanCal,
	"HanDate.js": HanDate,
	"HanRataDie.js": HanRataDie,
	"HebrewCal.js": HebrewCal,
	"HebrewDate.js": HebrewDate,
	"HebrewRataDie.js": HebrewRataDie,
	"IDate.js": IDate,
	"ilib.js": ilib,
	"INumber.js": INumber,
	"isAlnum.js": isAlnum,
	"isAlpha.js": isAlpha,
	"isAscii.js": isAscii,
	"isBlank.js": isBlank,
	"isCntrl.js": isCntrl,
	"isDigit.js": isDigit,
	"isGraph.js": isGraph,
	"isIdeo.js": isIdeo,
	"IslamicCal.js": IslamicCal,
	"IslamicDate.js": IslamicDate,
	"IslamicRataDie.js": IslamicRataDie,
	"isLower.js": isLower,
	"isPrint.js": isPrint,
	"isPunct.js": isPunct,
	"isScript.js": isScript,
	"isSpace.js": isSpace,
	"IString.js": IString,
	"isUpper.js": isUpper,
	"isXdigit.js": isXdigit,
	"JSUtils.js": JSUtils,
	"JulianCal.js": JulianCal,
	"JulianDate.js": JulianDate,
	"JulianDay.js": JulianDay,
	"JulianRataDie.js": JulianRataDie,
	"LengthUnit.js": LengthUnit,
	"LocaleInfo.js": LocaleInfo,
	"Locale.js": Locale,
	"LocaleMatcher.js": LocaleMatcher,
	"MassUnit.js": MassUnit,
	"MathUtils.js": MathUtils,
	"MeasurementFactory.js": MeasurementFactory,
	"Measurement.js": Measurement,
	"NameFmt.js": NameFmt,
	"Name.js": Name,
	"NormString.js": NormString,
	"NumberingPlan.js": NumberingPlan,
	"NumFmt.js": NumFmt,
	"PersAlgoRataDie.js": PersAlgoRataDie,
	"PersianAlgoCal.js": PersianAlgoCal,
	"PersianAlgoDate.js": PersianAlgoDate,
	"PersianCal.js": PersianCal,
	"PersianDate.js": PersianDate,
	"PersRataDie.js": PersRataDie,
	"PhoneFmt.js": PhoneFmt,
	"PhoneGeoLocator.js": PhoneGeoLocator,
	"PhoneHandlerFactory.js": PhoneHandlerFactory,
	"PhoneLocale.js": PhoneLocale,
	"PhoneNumber.js": PhoneNumber,
	"RataDie.js": RataDie,
	"ResBundle.js": ResBundle,
	"ScriptInfo.js": ScriptInfo,
	"SearchUtils.js": SearchUtils,
	"StringMapper.js": StringMapper,
	"TemperatureUnit.js": TemperatureUnit,
	"ThaiSolarCal.js": ThaiSolarCal,
	"ThaiSolarDate.js": ThaiSolarDate,
	"TimeUnit.js": TimeUnit,
	"TimeZone.js": TimeZone,
	"UnitFmt.js": UnitFmt,
	"UnknownUnit.js": UnknownUnit,
	"Utils.js": Utils,
	"VelocityUnit.js": VelocityUnit,
	"VolumeUnit.js": VolumeUnit
};

var oldRequire = require;
require = function(pathname) {
	var i = pathname.lastIndexOf('/');
	var file = i > -1 ? pathname.substring(i+1) : pathname;

	// console.log("new require: checking if " + file + " is predefined already.");
	return moduleMap[file] || (oldRequire && oldRequire(pathname));
}

module.exports = ilib;
