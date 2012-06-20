/*
 * ilibglobal.js - define the ilib name space
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/**
 * ilib Demo App: DateFmt jQuery controls
 */
function doDateFmt() {
	var lengthCtl = '<div id="lengthPane">'
			+ '<label>Length:</label>'
			+ '<input type="radio" name="dateLength" id="dateShort" value="short"/>short'
			+ '<input type="radio" name="dateLength" id="dateMedium" value="medium" checked="checked"/>medium'
			+ '<input type="radio" name="dateLength" id="dateLong" value="long"/>long'
			+ '<input type="radio" name="dateLength" id="dateFull" value="full"/>full'
			+ '</div>';
	var typeCtl = '<div id="typePane">'
		+ '<label>Type:</label>'
		+ '<input type="radio" name="dateType" id="dt_date" value="date"/>date'
		+ '<input type="radio" name="dateType" id="dt_time" value="time"/>time'
		+ '<input type="radio" name="dateType" id="dt_datetime" value="datetime" checked="checked"/>datetime'
		+ '</div>';
	var dateCtl = '<div id="datePane">'
		+ '<label>Date:</label>'
// Need to use the tooltip plugin for the descriptions, otherwise the UI looks cramp
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dmwy"/>dmwy - format all components, weekday, date, month, and year'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dmy" checked="checked"/>dmy - format only date, month, and year'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dmw"/>dmw - format only weekday, date, and month'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dm"/>dm - format only date and month'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="my"/>my - format only month and year'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dw"/>dw - format only the weekday and date'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="d"/>d - format only the date'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="m"/>m - format only the month, in numbers for shorter lengths, and letters for longer lengths'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="n"/>n - format only the month, in letters only for all lengths'
//		+ '<input type="radio" name="dateFmt" id="dateFmt" value="y"/>y - format only the year'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dmwy"/>dmwy'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dmy" checked="checked"/>dmy'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dmw"/>dmw'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dm"/>dm'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="my"/>my'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="dw"/>dw'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="d"/>d'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="m"/>m'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="n"/>n'
		+ '<input type="radio" name="dateFmt" id="dateFmt" value="y"/>y'
		+ '</div>';
	var timeCtl = '<div id="timePane">'
		+ '<label>Time:</label>'
// Need to use the tooltip plugin for the descriptions, otherwise the UI looks cramp
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahmsz"/>ahmsz - format the hours, minutes, seconds, am/pm (if using a 12 hour clock), and the time zone'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahms"/>ahms - format the hours, minutes, seconds, and am/pm (if using a 12 hour clock)'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hmsz"/>hmsz - format the hours, minutes, seconds, and the time zone'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hms"/>hms - format the hours, minutes, and seconds'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahmz"/>ahmz - format the hours, minutes, am/pm (if using a 12 hour clock), and the time zone'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahm"/>ahm - format the hours, minutes, and am/pm (if using a 12 hour clock)'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hmz" checked="checked"/>hmz - format the hours, minutes, and the time zone'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hm"/>hm - format only the hours and minutes'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ms"/>ms - format only the minutes and seconds'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="h"/>h - format only the hours'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="m"/>m - format only the minutes'
//		+ '<input type="radio" name="timeFmt" id="timeFmt" value="s"/>s - format only the seconds'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahmsz"/>ahmsz'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahms"/>ahms'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hmsz"/>hmsz'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hms"/>hms'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahmz"/>ahmz'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ahm"/>ahm'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hmz" checked="checked"/>hmz'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="hm"/>hm'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="ms"/>ms'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="h"/>h'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="m"/>m'
		+ '<input type="radio" name="timeFmt" id="timeFmt" value="s"/>s'
		+ '</div>';
	return lengthCtl + typeCtl + dateCtl + timeCtl;
};