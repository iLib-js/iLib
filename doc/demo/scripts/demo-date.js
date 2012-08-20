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

function setCalendarValues(cal) {
	var i, 
		calendarList = ilib.Cal.getCalendars(),
		calName = $("#calendarName");
	
	calName.empty();
	calendarList.sort();
	$.each(calendarList, function(key, value) {
		calName.append($("<option></option>").attr({
			value: value,
			"selected": (value == cal)
		}).text(value));
	});
	calName.append($("<option></option>").attr("value", "julianday").text("julianday"));
};

function setTimeZoneValues(element, tz) {
	var tzs = ilib.TimeZone.getAvailableIds(),
		i;

	tzs.sort();
	
	element.append($("<option></option>").attr({
		value: "none",
		"selected": true
	}).text("none"));
	
	$.each(tzs, function(key, value) {
		element.append($("<option></option>").attr({
			value: value,
			"selected": (value == tz)
		}).text(value));
	});
};

/**
 * ilib Demo App: DateFmt jQuery controls
 */
function setupFormatPicker() {
	$('#formatPane').show();
};

function setMonthValues(element, month, year) {
	var calName = $("#calendarName").val(),
		locale = $('#localeControl').val() || "en",
		cal = ilib.Cal.newInstance({
			type: calName,
			locale: locale
		}),
		sysres = new ilib.ResBundle({
			name: "sysres",
			locale: locale
		}),
		months = cal.getNumMonths(year),
		monthName,
		i;
	
	element.empty();
	for (i = 1; i <= months; i++) {
		monthName = sysres.getString(undefined, "MMMM"+i+'-'+calName) || sysres.getString(undefined, "MMMM"+i);
		element.append($("<option></option>").attr({
			"value": i,
			"selected": (i == month)
		}).text(i + " - " + monthName));
	}
};

function setDayValues(element, day, month, year) {
	var calName = $("#calendarName").val(),
		locale = $('#localeControl').val() || "en",
		cal = ilib.Cal.newInstance({
			type: calName,
			locale: locale
		}),
		days = cal.getMonLength(month, year),
		fmt = new ilib.DateFmt({
			calendar: calName,
			locale: locale,
			type: "date",
			date: "d"
		}),
		date = cal.newDateInstance();
	
	element.empty();
	for (i = 1; i <= days; i++) {
		date.day = i;
		element.append($("<option></option>").attr({
			"value": i,
			"selected": (i == day)
		}).text(fmt.format(date)));
	}
};

function setHourValues(element, hour) {
	var locale = $('#localeControl').val() || "en",
		i,
		calName = $("#calendarName").val(),
		cal = ilib.Cal.newInstance({
			type: calName,
			locale: locale,
			calendar: calName
		}),
		fmt = new ilib.DateFmt({
			calendar: calName,
			locale: locale,
			type: "time",
			time: "ah"
		}),
		date = cal.newDateInstance();
	
	element.empty();
	for (i = 0; i < 24; i++) {
		date.hour = i;
		element.append($("<option></option>").attr({
			"value": i,
			"selected": (i == hour)
		}).text(fmt.format(date)));
	}
}

function setMinutesSecondsValues(minuteElement, secondElement, minute, second) {
	var i;
	minuteElement.empty();
	secondElement.empty();
	for (i = 0; i < 60; i++) {
		minuteElement.append($("<option></option>").attr({
			value: i,
			selected: (i == minute)
		}).text(i));
		secondElement.append($("<option></option>").attr({
			value: i,
			selected: (i == second)
		}).text(i));
	}
};

function setupCalendarPicker() {
	var i, 
		calendarList = ilib.Cal.getCalendars(),
		calName = $("#calendarName"),
		yearElement = $('#year'),
		monthElement = $('#month'),
		dayElement = $('#day'),
		hourElement = $('#hour'),
		minuteElement = $('#minute'),
		secondElement = $('#second'),
		cal,
		locale = $('#localeControl').val() || "en",
		li = new ilib.LocaleInfo(locale),
		today,
		year,
		tzElement = $("#timezone");
	
	setCalendarValues();
	
	cal = ilib.Cal.newInstance({
		type: "gregorian",
		locale: locale
	});
	today = cal.newDateInstance();
	
	setMinutesSecondsValues(minuteElement, secondElement, today.minute, today.second);
	year = parseInt(yearElement.val());
	
	$('#localeControl').change(function () {
		var month = parseInt(monthElement.val()),
			hour = parseInt(hourElement.val()),
			year = parseInt(yearElement.val());;
		setMonthValues(monthElement, month, year);
		setHourValues(hourElement, hour);
	});
	
	$('#year').change(function () {
		var month = parseInt(monthElement.val()),
			day = parseInt(dayElement.val()),
			year = parseInt(yearElement.val());;
		setMonthValues(monthElement, month, year);
		setDayValues(dayElement, day, month, year);
	});
	
	calName.change(function() {
		var name = calName.val(),
			locale = $('#localeControl').val() || "en";
		
		if (name === "julianday") {
			$('#calendarPicker').hide();
			$('#jdpicker').show();
		} else {
			$('#jdpicker').hide();
			$('#calendarPicker').show();
			cal = ilib.Cal.newInstance({
				type: name,
				locale: locale
			});
			
			var today = cal.newDateInstance(),
				yearElement = $('#year');
	
			yearElement.val(today.year);
			
			setMonthValues(monthElement, today.month, today.year);
			setDayValues(dayElement, today.day, today.month, today.year);
			setHourValues(hourElement, today.hour);
		}
	});
	
	monthElement.change(function() {
		var day = parseInt(dayElement.val());
			month = parseInt(monthElement.val()),
			year = parseInt(yearElement.val());
		setDayValues(dayElement, day, month, year);
	});
	
	yearElement.val(today.year);
	setMonthValues(monthElement, today.month, today.year);
	setDayValues(dayElement, today.day, today.month, today.year);
	setHourValues(hourElement, today.hour);

	setTimeZoneValues(tzElement);
	
	$('#calendarPane').show();
	$('#calendarPicker').show();
};

function setupRangePicker(startname, endname) {
	var i, 
		calendarList = ilib.Cal.getCalendars(),
		calName = $("#calendarName"),
		startYearElement = $('#syear'),
		startMonthElement = $('#smonth'),
		startDayElement = $('#sday'),
		startHourElement = $('#shour'),
		startMinuteElement = $('#sminute'),
		startSecondElement = $('#ssecond'),
		startTimeZoneElement = $('#stimezone'),
		endYearElement = $('#eyear'),
		endMonthElement = $('#emonth'),
		endDayElement = $('#eday'),
		endHourElement = $('#ehour'),
		endMinuteElement = $('#eminute'),
		endSecondElement = $('#esecond'),
		endTimeZoneElement = $('#etimezone'),
		cal,
		locale = $('#localeControl').val() || "en",
		li = new ilib.LocaleInfo(locale),
		today;
	
	$('#startname').text(startname);
	$('#endname').text(endname);
	
	setCalendarValues();
	
	cal = ilib.Cal.newInstance({
		type: "gregorian",
		locale: locale
	});
	today = cal.newDateInstance();
	
	setMinutesSecondsValues(startMinuteElement, startSecondElement, today.minute, today.second);
	setMinutesSecondsValues(endMinuteElement, endSecondElement, today.minute, today.second);
	
	$('#localeControl').change(function () {
		var startYear = parseInt(startYearElement.val()),
			startMonth = parseInt(startMonthElement.val()),
			startHour = parseInt(startHourElement.val()),
			endYear = parseInt(endYearElement.val()),
			endMonth = parseInt(endMonthElement.val()),
			endHour = parseInt(endHourElement.val());
		setMonthValues(startMonthElement, startMonth, startYear);
		setHourValues(startHourElement, startHour);

		setMonthValues(endMonthElement, endMonth, endYear);
		setHourValues(endHourElement, endHour);
	});
	
	startYearElement.change(function () {
		var startYear = parseInt(startYearElement.val()),
			startMonth = parseInt(startMonthElement.val()),
			startDay = parseInt(startDayElement.val());
		setMonthValues(startMonthElement, startMonth, startYear);
		setDayValues(startDayElement, startDay, startMonth, startYear);
	});
	
	endYearElement.change(function () {
		var endYear = parseInt(endYearElement.val()),
			endMonth = parseInt(endMonthElement.val()),
			endDay= parseInt(endDayElement.val());
		setMonthValues(endMonthElement, endMonth, endYear);
		setDayValues(endDayElement, endDay, endMonth, endYear);
	});
	
	calName.change(function() {
		var name = calName.val(),
			locale = $('#localeControl').val() || "en";
		
		hideAllPickers();
		
		if (name === "julianday") {
			$('#rangePicker').hide();
			$('#calendarPane').show();
			$('#jdRangepicker').show();
		} else {
			$('#jdRangepicker').hide();
			$('#calendarPane').show();
			$('#rangePicker').show();
			
			cal = ilib.Cal.newInstance({
				type: name,
				locale: locale
			});
			
			var today = cal.newDateInstance();
	
			startYearElement.val(today.year);
			endYearElement.val(today.year);
			
			setMonthValues(startMonthElement, today.month, today.year);
			setDayValues(startDayElement, today.day, today.month, today.year);
			setHourValues(startHourElement, today.hour);

			setMonthValues(endMonthElement, today.month, today.year);
			setDayValues(endDayElement, today.day, today.month, today.year);
			setHourValues(endHourElement, today.hour);
		}
	});
	
	startMonthElement.change(function() {
		var day = parseInt(startDayElement.val());
			month = parseInt(startMonthElement.val()),
			year = parseInt(startYearElement.val());
		setDayValues(startDayElement, day, month, year);
	});

	endMonthElement.change(function() {
		var day = parseInt(endDayElement.val());
			month = parseInt(endMonthElement.val()),
			year = parseInt(endYearElement.val());
		setDayValues(endDayElement, day, month, year);
	});
	
	startYearElement.val(today.year);
	setMonthValues(startMonthElement, today.month, today.year);
	setDayValues(startDayElement, today.day, today.month, today.year);
	setHourValues(startHourElement, today.hour);

	endYearElement.val(today.year);
	setMonthValues(endMonthElement, today.month, today.year);
	setDayValues(endDayElement, today.day, today.month, today.year);
	setHourValues(endHourElement, today.hour);

	$('#calendarPane').show();
	$('#rangePicker').show();
};

function setupDurationPicker() {
	$('#durationPicker').show();
};

function setupTargetTZPicker() {
	var timeZoneElement = $('#targettz');
	setTimeZoneValues(timeZoneElement);
	
	$('#targetTZPicker').show();
};

function hideAllPickers() {
	$('#calendarPane').hide();
	$('#formatPane').hide();
	$('#calendarPicker').hide();
	$('#jdpicker').hide();
	$('#rangePicker').hide();
	$('#jdRangePicker').hide();
	$('#durationPicker').hide();
	$('#targetTZPicker').hide();
};