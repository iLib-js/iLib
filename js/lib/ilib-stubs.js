/*
 * ilib-stubs.js - define the legacy ilib namespace in terms of new modules
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

// !dependencies: false

ilib.CType=CType;ilib._roundFnc={};
ilib.Date=DateFactory;ilib.Cal=CalendarFactory;ilib.Measurement=MeasurementFactory;ilib.extend2(ilib.Date, Astro);
ilib.shallowCopy=JSUtils.shallowCopy;ilib.deepCopy=JSUtils.deepCopy;ilib.mapString=JSUtils.mapString;ilib.indexOf=JSUtils.indexOf;ilib.toHexString=JSUtils.toHexString;ilib.isDate=JSUtils.isDate;ilib.merge=JSUtils.merge;ilib.isEmpty=JSUtils.isEmpty;ilib.hashCode=JSUtils.hashCode;ilib.Locale=Locale;ilib.mergeLocData=Utils.mergeLocData;ilib.getLocFiles=Utils.getLocFiles;ilib.loadData=Utils.loadData;ilib.LocaleInfo=LocaleInfo;ilib.signum=MathUtils.signum;ilib.mod=MathUtils.mod;ilib.amod=MathUtils.amod;ilib.String=IString;ilib.Cal.newInstance=CalendarFactory;ilib.Cal.getCalendars=CalendarFactory.getCalendars;ilib.Cal.Gregorian=GregorianCal;ilib.JulianDay=JulianDay;ilib.Date.RataDie=RataDie;ilib.Date.GregRataDie=GregRataDie;ilib.TimeZone=TimeZone;ilib.bsearch=SearchUtils.bsearch;ilib.bisectionSearch=SearchUtils.bisectionSearch;ilib.Date.GregDate=GregorianDate;ilib.Date.newInstance=DateFactory;ilib.ResBundle=ResBundle;ilib.DateFmt=DateFmt;ilib.DateRngFmt=DateRngFmt;ilib.Cal.Hebrew=HebrewCal;ilib.Date.HebrewDate=HebrewDate;ilib.Cal.Islamic=IslamicCal;ilib.Date.IslamicDate=IslamicDate;ilib.Cal.Julian=JulianCal;ilib.Date.JulDate=JulianDate;ilib.Date.JulRataDie=JulianRataDie;
ilib.Cal.ThaiSolar=ThaiSolarCal;ilib.Date.ThaiSolarDate=ThaiSolarDate;ilib.Date.initAstro=Astro.initAstro;ilib.Date.PersAstroRataDie=PersRataDie;ilib.Cal.Persian=PersianCal;ilib.Date.PersDate=PersianDate;ilib.Cal.PersianAlgo=PersianAlgoCal;ilib.Date.PersAlgoDate=PersianAlgoDate;ilib.Date.PersAlgoRataDie=PersAlgoRataDie;ilib.Cal.Han=HanCal;ilib.Date.HanDate=HanDate;ilib.Date.HanRataDie=HanRataDie;
ilib.Cal.Ethiopic=EthiopicCal;ilib.Date.EthiopicDate=EthiopicDate;ilib.Date.EthiopicRataDie = EthiopicRataDie;
ilib.Cal.Coptic=CopticCal;ilib.Date.CopticDate=CopticDate;ilib.Date.CopticRataDie=CopticRataDie;
ilib.CType.isDigit=isDigit;ilib.CType.isSpace=isSpace;ilib.Currency=Currency;ilib.Number=INumber;ilib.NumFmt=NumFmt;ilib.DurFmt=DurationFmt;ilib.CType.isAlpha=isAlpha;ilib.CType.isAlnum=isAlnum;ilib.CType.isAscii=isAscii;ilib.CType.isBlank=isBlank;ilib.CType.isCntrl=isCntrl;ilib.CType.isGraph=isGraph;ilib.CType.isIdeo=isIdeo;ilib.CType.isLower=isLower;ilib.CType.isPrint=isPrint;ilib.CType.isPunct=isPunct;ilib.CType.isUpper=isUpper;ilib.CType.isXdigit=isXdigit;ilib.CType.isScript=isScript;ilib.ScriptInfo=ScriptInfo;ilib.Name=Name;ilib.NameFmt=NameFmt;ilib.Address=Address;ilib.AddressFmt=AddressFmt;ilib.GlyphString=GlyphString;ilib.NormString=NormString;ilib.CodePointSource=CodePointSource;ilib.ElementIterator=ElementIterator;ilib.Collator=Collator;ilib.LocaleMatcher=LocaleMatcher;ilib.CaseMapper=CaseMapper;ilib.NumPlan=NumberingPlan;ilib.PhoneLoc=PhoneLocale;ilib.StateHandler=PhoneHandler;ilib._handlerFactory=PhoneHandlerFactory;ilib.PhoneNumber=PhoneNumber;ilib.PhoneFmt=PhoneFmt;ilib.GeoLocator=PhoneGeoLocator;ilib.Measurement.Unknown=UnknownUnit;ilib.Measurement.Area=AreaUnit;ilib.Measurement.DigitalStorage=DigitalStorageUnit;ilib.Measurement.Energy=EnergyUnit;ilib.Measurement.FuelConsumption=FuelConsumptionUnit;ilib.Measurement.Length=LengthUnit;ilib.Measurement.Mass=MassUnit;ilib.Measurement.Temperature=TemperatureUnit;ilib.Measurement.Time=TimeUnit;ilib.Measurement.Speed=VelocityUnit;ilib.Measurement.Volume=VolumeUnit;ilib.UnitFmt=UnitFmt;

