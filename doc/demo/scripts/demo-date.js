/*
 * demo-date.js - define the scripts used by the demo
 * 
 * Copyright © 2012-2014, JEDLSoft
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
	var calendarList = CalendarFactory.getCalendars(),
		calName = $("#calendarName");
	
	calName.empty();
	calendarList.sort();
	$.each(calendarList, function(key, value) {
		calName.append($("<option></option>").attr({
			value: value,
			"selected": (value == cal)
		}).text(value));
	});
};

function setTimeZoneValues(element, tz) {
	var tzs = TimeZone.getAvailableIds();

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
	$('#lengthPane').show();
	$('#formatPane').show();
};

function setMonthValues(element, month, year) {
	var calName = $("#calendarName").val(),
		locale = $('#localeControl').val() || "en",
		cal = CalendarFactory({
			type: calName,
			locale: locale
		}),
		sysres = new ResBundle({
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
		cal = CalendarFactory({
			type: calName,
			locale: locale
		}),
		days = cal.getMonLength(month, year),
		fmt = new DateFmt({
			calendar: calName,
			locale: locale,
			type: "date",
			date: "d",
			timezone: "Etc/UTC"
		}),
		date = cal.newDateInstance({
			locale: locale,
			year: year,
			month: month,
			day: 1,
			timezone: "Etc/UTC"
		});
	
	element.empty();
	for (var i = 1; i <= days; i++) {
		date.setDays(i);
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
		cal = CalendarFactory({
			type: calName,
			locale: locale,
			calendar: calName
		}),
		fmt = new DateFmt({
			calendar: calName,
			locale: locale,
			type: "time",
			time: "ah",
			timezone: "Etc/UTC"
		}),
		date = cal.newDateInstance({
			hour: 0,
			timezone: "Etc/UTC"
		});
	
	element.empty();
	for (i = 0; i < 24; i++) {
		date.setHours(i);
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

function setScriptValues(element) {
	var scripts = ScriptInfo.getAllScripts(),
		info,
		i;
	
	element.empty();
	for (i = 0; i < scripts.length; i++) {
		info = new ScriptInfo(scripts[i]);
		element.append($("<option></option>").attr({
			"value": scripts[i]
		}).text(info.getName()));
	}
};

function setupCalendarPicker() {
	var calName = $("#calendarName"),
		yearElement = $('#year'),
		monthElement = $('#month'),
		dayElement = $('#day'),
		hourElement = $('#hour'),
		minuteElement = $('#minute'),
		secondElement = $('#second'),
		cal,
		locale = $('#localeControl').val() || "en",
		today,
		year,
		tzElement = $("#timezone");
	
	cal = CalendarFactory({
		locale: locale
	});
	today = cal.newDateInstance();

	setCalendarValues(cal.getType());
	calName.append($("<option></option>").attr("value", "julianday").text("julianday"));
	calName.append($("<option></option>").attr("value", "unixtime").text("unixtime"));

	setMinutesSecondsValues(minuteElement, secondElement, today.minute, today.second);
	year = parseInt(yearElement.val());
	
	$('#localeControl').change(function () {
		var month = parseInt(monthElement.val()),
			hour = parseInt(hourElement.val()),
			year = parseInt(yearElement.val());
		setMonthValues(monthElement, month, year);
		setHourValues(hourElement, hour);
	});
	
	$('#year').change(function () {
		var month = parseInt(monthElement.val()),
			day = parseInt(dayElement.val()),
			year = parseInt(yearElement.val());

		$('#cycle').val(Math.floor((year - 1) / 60));
		$('#cycleYear').val(MathUtils.amod(year, 60));

		setMonthValues(monthElement, month, year);
		setDayValues(dayElement, day, month, year);
	});
	
	calName.change(function() {
		var name = calName.val(),
			locale = $('#localeControl').val() || "en";
		
		if (name === "julianday") {
			$('#yearMonthPicker').hide();
			$('#calendarPicker').hide();
			$('#jdpicker').show();
			$('#utpicker').hide();
			$('#chineseCyclesPicker').hide();
		} else if (name === "unixtime") {
			$('#yearMonthPicker').hide();
			$('#calendarPicker').hide();
			$('#jdpicker').hide();
			$('#utpicker').show();
			$('#chineseCyclesPicker').hide();
		} else {
			$('#jdpicker').hide();
			$('#utpicker').hide();
			$('#yearMonthPicker').show();
			$('#calendarPicker').show();
			if (name === "han") {
				$('#chineseCyclesPicker').show();
			} else {
				$('#chineseCyclesPicker').hide();
			}
			cal = CalendarFactory({
				type: name,
				locale: locale
			});
			
			var today = cal.newDateInstance(),
				yearElement = $('#year');
			
			if (name === "han") {
				$('#cycle').val(today.getCycles());
				$('#cycleYear').val(today.getCycleYears());
			}
	
			yearElement.val(today.year);
			
			setMonthValues(monthElement, today.month, today.year);
			setDayValues(dayElement, today.day, today.month, today.year);
			setHourValues(hourElement, today.hour);
		}
	});
	
	$('#cycle,#cycleYear').change(function() {
		var cycle = parseInt($('#cycle').val());
		var cycleYear = parseInt($('#cycleYear').val());
		var year = cycle * 60 + cycleYear;
		
		$('#year').val(year);
		$('#cycle').val(Math.floor((year - 1) / 60));
		$('#cycleYear').val(MathUtils.amod(year, 60));
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
	$('#yearMonthPicker').show();
	$('#calendarPicker').show();
};

function datePicker() {
	var calName = $("#calendarName"),
		yearElement = $('#year'),
		monthElement = $('#month'),
		dayElement = $('#dayPickerDay'),
		cal,
		locale = $('#localeControl').val() || "en",
		today,
		year;

	cal = CalendarFactory({
		type: "gregorian",
		locale: locale
	});
	today = cal.newDateInstance();

	year = parseInt(yearElement.val());
	
	$('#localeControl').change(function () {
		var month = parseInt(monthElement.val()),
			hour = parseInt(hourElement.val()),
			year = parseInt(yearElement.val());
		setMonthValues(monthElement, month, year);
		setHourValues(hourElement, hour);
	});
	
	$('#year').change(function () {
		var month = parseInt(monthElement.val()),
			day = parseInt(dayElement.val()),
			year = parseInt(yearElement.val());
		setMonthValues(monthElement, month, year);
		setDayValues(dayElement, day, month, year);
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


	
	$('#yearMonthPicker').show();
	$('#dayPicker').show();
	
};

function setupRangePicker(startname, endname, jdname, utname) {
	var calName = $("#calendarName"),
		startYearElement = $('#syear'),
		startMonthElement = $('#smonth'),
		startDayElement = $('#sday'),
		startHourElement = $('#shour'),
		startMinuteElement = $('#sminute'),
		startSecondElement = $('#ssecond'),
		endYearElement = $('#eyear'),
		endMonthElement = $('#emonth'),
		endDayElement = $('#eday'),
		endHourElement = $('#ehour'),
		endMinuteElement = $('#eminute'),
		endSecondElement = $('#esecond'),
		cal,
		locale = $('#localeControl').val() || "en",
		today;
	
	$('#startname').text(startname);
	$('#endname').text(endname);
	
	setCalendarValues();
	calName.append($("<option></option>").attr("value", "julianday").text(jdname));
	calName.append($("<option></option>").attr("value", "unixtime").text(utname));

	cal = CalendarFactory({
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
			$('#lengthPane').show();
			$('#jdRangepicker').show();
		} else {
			$('#jdRangepicker').hide();
			$('#lengthPane').show();
			$('#calendarPane').show();
			$('#rangePicker').show();
			
			cal = CalendarFactory({
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
	$('#lengthPane').show();
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

function setupTextPicker(res) {
	$('#sampleTextLabel').text(res.getString("Sample Text"));
	$('#resTypePicker').show();
	$('#sampleTextPicker').show();
};

function setupCTypePicker(res) {
	$('#sampleTextLabel').text(res.getString("Character"));
	$('#sampleTextPicker').show();
};

function setDefaultNumFmtStyleValues(style, res) {
	style.append($("<option></option>").attr({
		value: "standard",
		selected: true
	}).text(res.getString("Standard")));
	style.append($("<option></option>").attr({
		value: "scientific",
		selected: false
	}).text(res.getString("Scientific")));
};

function setupCurrencyValues(element) {
	var i, 
		currencies = Currency.getAvailableCurrencies(),
		locale = $('#localeControl').val() || "en-US",
		li = new LocaleInfo(locale);
	
	element.empty();
	
	currencies.sort();
	
	for (i = 0; i < currencies.length; i++) {
		element.append($("<option></option>").attr({
			value: currencies[i],
			selected: currencies[i] === li.getCurrency()
		}).text(currencies[i]));
	}
};

function setupNumPicker() {
	var style = $("#numStyle"),
		stylePicker = $("#numStylePicker"),
		currency = $("#currencyPicker"),
		locale = $('#localeControl').val() || "en",
		res = new ResBundle({
			name: "sysres",
			locale: locale
		});
	
	$('#localeControl,input[name=numFmtType]').change(function () {
		var type = $('[name="numFmtType"]:checked').val();
		
		switch (type) {
		case 'number':
			style.empty();
			stylePicker.show();
			setDefaultNumFmtStyleValues(style, res);
			currency.hide();
			break;
		case 'currency':
			style.empty();
			stylePicker.show();
			style.append($("<option></option>").attr({
				value: "common",
				selected: true
			}).text(res.getString("Common")));
			style.append($("<option></option>").attr({
				value: "iso",
				selected: false
			}).text(res.getString("ISO")));
			setupCurrencyValues($('#currency'));
			currency.show();
			break;
		case 'percentage':
			stylePicker.hide();
			currency.hide();
			break;
		}
	});
	
	setDefaultNumFmtStyleValues(style, res);
	
	$("#numTypePicker").show();
	$('#sampleTextLabel').text(res.getString("Number"));
	$('#sampleTextPicker').show();
	$('#numFmtPicker').show();
};

function setupCurrencyPicker() {
	$('#localeControl').change(function () {
		setupCurrencyValues($('#currency'));
	});
	
	setupCurrencyValues($('#currency'));
	
	$('#currencyPicker').show();
};

function setupNumParsingPicker(res) {
	$("#numTypePicker").show();
	$('#sampleTextLabel').text(res.getString("Number"));
	$('#sampleTextPicker').show();
};

function setupCalendarInfoPicker() {
	var yearElement = $('#year'),
		monthElement = $('#month'),
		calName = $('#calendarName'),
		cal;
	
	setCalendarValues();
	
	cal = CalendarFactory({
		type: "gregorian"
	});
	today = cal.newDateInstance();

	$('#localeControl').change(function () {
		var month = parseInt(monthElement.val()),
			year = parseInt(yearElement.val());
		setMonthValues(monthElement, month, year);
	});

	calName.change(function() {
		var name = calName.val(),
			locale = $('#localeControl').val() || "en";
		
		cal = CalendarFactory({
			type: name,
			locale: locale
		});
		
		var today = cal.newDateInstance();

		yearElement.val(today.year);
		setMonthValues(monthElement, today.month, today.year);
	});

	$('#year').change(function () {
		var month = parseInt(monthElement.val()),
			year = parseInt(yearElement.val());
		setMonthValues(monthElement, month, year);
	});

	yearElement.val(today.year);
	setMonthValues(monthElement, today.month, today.year);
	
	$('#yearMonthPicker').show();
	$('#calendarPane').show();
};

function setupScriptInfoPicker() {
	var scriptElement = $('#script');
	
	setScriptValues(scriptElement);

	$('#scriptPicker').show();
};

function setupNameParsingPicker(res) {
	$('#sampleTextLabel').text(res.getString("Name"));
	$('#sampleTextPicker').show();
};

function setupNamePicker() {
	$('#namePicker').show();
	
	$('.namepart').click(function (element) {
		$('.nameLength').attr('checked', false);
	});
	
	$('#nameShort').click(function () {
		$('#partsp').prop('checked', false);
		$('#partsg').prop('checked', true);
		$('#partsm').prop('checked', false);
		$('#partsf').prop('checked', true);
		$('#partss').prop('checked', false);
	});
	$('#nameMedium').click(function () {
		$('#partsp').prop('checked', false);
		$('#partsg').prop('checked', true);
		$('#partsm').prop('checked', true);
		$('#partsf').prop('checked', true);
		$('#partss').prop('checked', false);
	});
	$('#nameLong').click(function () {
		$('#partsp').prop('checked', true);
		$('#partsg').prop('checked', true);
		$('#partsm').prop('checked', true);
		$('#partsf').prop('checked', true);
		$('#partss').prop('checked', true);
	});
};

function setupAddressParsingPicker(res) {
	$('#textBoxLabel').text(res.getString("Free form address:"));
	$('#textBoxPicker').show();
};

function setupAddressPicker() {
	$('#addressPicker').show();
};

function setupPhoneParsingPicker(res) {
	$('#wholePhoneNum').show();
	$('#textBoxLabel').text(res.getString("Free form phone number:"));
	$('#textBoxPicker').show();
};

function setupPhonePicker(locale) {
	var valid = {
		'0': 1, '1': 1, '2': 1,	'3': 1,	'4': 1,	'5': 1,	'6': 1,	'7': 1,	'8': 1,	'9': 1,
		'+': 1,	'*': 1,	'#': 1,
		// pause chars
		'p': 1,	'P': 1,	't': 1,	'T': 1,	'w': 1,	'W': 1,
		// extension char
		'x': 1,	'X': 1
	};
	
	$(".phoneDigits").keypress(function (e) {
		var c = String.fromCharCode(e.charCode);
	    // if the letter is not a phone digit then don't type anything
		if (e.which != 8 && e.which != 0 && !(c in valid)) {
	        return false;
	    }
	});
	
	var fmt = new PhoneFmt({locale: locale});
	var styles = fmt.getAvailableStyles();
	
	if (styles.length > 0) {
		styles.sort();
		
		var element = $('#phoneStyle');
		element.empty();
		
		for (var i = 0; i < styles.length; i++) {
			element.append($("<option></option>").attr({
				value: styles[i],
				selected: styles[i] == "default"
			}).text(styles[i]));
		}
		$('#stylePicker').show();
	} else {
		$('#stylePicker').hide();
	}
	$('#phonePicker').show();
};

function setMeasurementValues(element, u) {
	var units = MeasurementFactory.getAvailableUnits();
	units.sort();
	$.each(units, function(key, value) {
		element.append($("<option></option>").attr({
			value: value,
			"selected": (value == u)
		}).text(value));
	});
};

function setupUnitFmtPicker() {
    var unitElement = $('#unit');
    setMeasurementValues(unitElement);
    $('#unitFmtPicker').show();
    $('#unitLong').prop('checked', true);
    $('#autoConv').prop('checked', true);
    $('#uNative').prop('checked', true);
    $('#scale').prop('checked', true);
}

function fromUnitSelected() {
    var unit = $('#fUnit').val();
    var toUnitElement = $('#tUnit');
    toUnitElement.find('option').remove().end();
    var measurement;
    for (var c in Measurement._constructors) {
        measurement = Measurement._constructors[c];
        if (typeof(measurement.aliases[unit]) !== 'undefined') {                
                break;
        }
        measurement = 'undefined';
    }
    var units = typeof(measurement) !== 'undefined' ? measurement.getMeasures() : "unknown";
    $.each(units, function(key, value) {
        toUnitElement.append($("<option></option>").attr({
                value: value              
        }).text(value));
    });    
}

function setupUnitConvPicker() {
    var unitElement = $('#fUnit');
    setMeasurementValues(unitElement);
    fromUnitSelected();
    $('#locCtrl').hide();
    $('#unitConvPicker').show();
}

function hideAllPickers() {
	$('#calendarPane').hide();
	$('#lengthPane').hide();
	$('#formatPane').hide();
	$('#calendarPicker').hide();
	$('#yearMonthPicker').hide();
	$('#jdpicker').hide();
	$('#utpicker').hide();
	$('#chineseCyclesPicker').hide();
	$('#rangePicker').hide();
	$('#jdRangePicker').hide();
	$('#durationPicker').hide();
	$('#targetTZPicker').hide();
	$('#resTypePicker').hide();
	$('#sampleTextPicker').hide();
	$('#numFmtPicker').hide();
	$('#currencyPicker').hide();
	$('#scriptPicker').hide();
	$("#numTypePicker").hide();
	$('#namePicker').hide();
	$('#addressPicker').hide();
	$('#phonePicker').hide();
	$('#textBoxPicker').hide();
	$('#dayPicker').hide();
    $('#unitFmtPicker').hide();
    $('#unitConvPicker').hide();
    $('#locCtrl').show();
};
