/**
 * ilib-standard-webpack.js - metafile that includes a reasonable set of other js files
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
ilib.GregorianCal = require("../GregorianCal.js");
ilib.GregorianDate = require("../GregorianDate.js");
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
ilib.LocaleInfo = require("../LocaleInfo.js");
ilib.DateRngFmt = require("../DateRngFmt.js");
ilib.ScriptInfo = require("../ScriptInfo.js");
ilib.CaseMapper = require("../CaseMapper.js");
ilib.ListFmt = require("../ListFmt.js");
ilib.TimeZone = require("../TimeZone.js");

//This unpacks the above classes to the global scope
require("../ilib-unpack.js");

// Must be at the end of meta file
require("../ilib-getdata.js");

module.exports = ilib;