$(function(){
	var transferredLocale = parent.document.all["iframeName"].value || "en-GB";
	console.log("transferredLocale: ", transferredLocale);

	//transferredLocale = "am-ET"
	ilib.setLocale(transferredLocale);
	var currentLocale = ilib.getLocale();

	var li = new LocaleInfo(currentLocale);
	var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	$('#systemLocale').text(currentLocale);
	$('#localedescription').text(li.getLanguageName() + " , " + li.getRegionName() + " (" + li.getScript() + ")");
				
	$('#defaultCalendar').text(li.getCalendar());
	$('#clock').text(li.getClock());
	$('#defaultCurrency').text(li.getCurrency());
	$('#weekStart').text(weeks[li.getFirstDayOfWeek()]);
	$('#weekendStart').text(weeks[li.getWeekEndStart()]);
	$('#weekendEnd').text(weeks[li.getWeekEndEnd()]);

	var date =[];
	var fmt =[];
	var value =[];
	var nameOfDay=[];
	var nameOfMonth=[];
	var monthID = [];
	var weekID = [];
	var fmtArray = [];
	var length = ["full", "long", "medium", "short"];
	var month = ["jan", "feb", "mar", "apr", "may","jun", "jul", "aug", "sep","oct","nov", "dec"];
	var week = ["sun", "mon", "tue", "wed", "thu", "fri","sat"];

	var dayCount = 0, monthCount = 0, fmtArrayCount;

	for (i=0; i<7; i++) {
		date[i] = new GregorianDate({locale: currentLocale, year: 2015, month: 8, day: i+2});
		for (j=0; j < 4; j++) {
			fmt[j] = new DateFmt({locale: currentLocale, date:"w", length: length[j], useNative: false, timezone: 'local'});
			value[i] = fmt[j].format(date[i]);
			nameOfDay[dayCount] = value[i];
			weekID[dayCount] = week[i]+length[j]
			dayCount++;
		}
	}
	for (i=0; i<12; i++) {
		date[i] = new GregorianDate({locale: currentLocale, month: i+1});
		for (j=0; j < 4; j++) {
			fmt[j] = new DateFmt({locale: currentLocale, date:"m", length: length[j], useNative: false, timezone: 'local'});
			value[i] = fmt[j].format(date[i]);
			nameOfMonth[monthCount] = value[i]
			monthID[monthCount] = month[i]+length[j]
			monthCount++;
		}
	}
	for (i=0; i < weekID.length +1; i++) {
		$("#"+weekID[i]).text(nameOfDay[i]);
	}

	for (i=0; i < monthID.length+1; i++) {
		$("#"+monthID[i]).text(nameOfMonth[i]);	
	}


	var row = [];
	var count = 0;

	var fmt = DateFmt.getMeridiemsRange({locale: currentLocale});
	for (i=0; i < fmt.length; i++) {
		row[i] = "<tr><td id='rangea"+ count.toString()+ "' /><td id='stringa"+count.toString()+"' />";

		$('#meridiemTable').append(row[count]);
		$("#rangea"+count).text(fmt[i].start + " ~ " + fmt[i].end);
		$("#stringa"+count).text(fmt[i].name);
		count++;
	}

	var date = new GregorianDate({locale: currentLocale, year: 2015, month: 8, day: 5, hour: 13, minute: 45, second: 0,millisecond: 0});

	//DateTime				
	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
					
		fmt[i] = new DateFmt({locale: currentLocale, type: "datetime", length: length[i], useNative: false, timezone: 'local'});
		
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		
		$("#dt"+length[i]).text(length[i]);
		$("#dt"+length[i]+"Fmt").text(fmtArray[i].template);
		$("#dt"+length[i]+"Sample").text(fmtArray[i].format(date));
	}
				
	//Date
	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
		
		fmt[i] = new DateFmt({locale: currentLocale, type: "date", date:"dmwy", length: length[i], useNative: false, timezone: 'local'});
		
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		
		$("#date"+length[i]).text(length[i]);
		$("#date"+length[i]+"Fmt").text(fmtArray[i].template);
		$("#date"+length[i]+"Sample").text(fmtArray[i].format(date));
	}

	//Time
	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
		
		fmt[i] = new DateFmt({locale: currentLocale, type: "time", time:"ahmsz", length: length[i], useNative: false, timezone: 'local'});
		
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		
		$("#time"+length[i]).text(length[i]);
		$("#time"+length[i]+"Fmt").text(fmtArray[i].template);
		$("#time"+length[i]+"Sample").text(fmtArray[i].format(date));
	}

	//Date Range
	var start = new DateFactory({year: 2011,month: 11,day: 20,hour: 13,minute: 45,second: 0,millisecond: 0,type:li.getCalendar()});
	var end = new DateFactory({year: 2013,month: 1,day: 31,hour: 14,minute: 30,second: 0,millisecond: 0,type:li.getCalendar()});

	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
		fmt[i] = new DateRngFmt({locale: currentLocale, length: length[i]});					
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		$("#daterng"+length[i]).text(length[i]);
		$("#daterng"+length[i]+"Sample").text(fmtArray[i].format(start, end));
	}

	// Date Duration
	var durationDate = {year: 1,month: 1,week: 1,day: 1};
	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
		fmt[i] = new DurationFmt({locale: currentLocale, style:"text", length: length[i]});
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		$("#datedur"+length[i]).text(length[i]);
		$("#datedur"+length[i]+"Sample").text(fmtArray[i].format(durationDate).toString());
	}

	var durationTime = {hour: 1,minute: 1,second: 1, millisecond: 1};
	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {					
		fmt[i] = new DurationFmt({locale: currentLocale, style:"colok", length: length[i]});
		fmtArray[fmtArrayCount] = fmt[i];
		$("#timedur"+length[i]).text(length[i]);
		$("#timedur"+length[i]+"Sample").text(fmtArray[i].format(durationTime).toString());
	}


	// Number Formatting
	var fmt = new NumFmt({locale: currentLocale,type: "percentage"});
	$("#numDecimalSymbol").text(li.getDecimalSeparator());
	$("#numDecimal").text(fmt.format(1.73));

	var fmt = new NumFmt({locale: currentLocale,style: "standard"});
	$("#numGroupFmt").text(fmt.format(123456789.4));

	var fmt = new NumFmt({locale: currentLocale,type: "percentage"});
	$("#numPercentSymbol").text(li.getPercentageSymbol());
	$("#numPercent").text(fmt.format(34));

	var fmt = new NumFmt({locale: currentLocale, type: "currency", currency:li.getCurrency()});
	$("#numCurrencySymbol").text(fmt.sign);
	$("#numCurrency").text(fmt.format(57.05));

	var fmt = new NumFmt({locale: currentLocale});
	$("#numPlus").text(fmt.format(+572));
	$("#numMinus").text(fmt.format(-37));


	// local, international, mobile : style:default
	phoneNumberList = {
		"de-DE" : ["038852123456", "0033112345678", "016512345678"],
		"de-LU" : ["501234", "00352123456", "661234567"],
		"en-AU" : ["0287654321", "001661256781234", "0419212345"],
		"en-GB" : ["02034523434", "0033112345678", "0751234567"],
		"en-HK" : ["61234567", "00133112345678", "61234567"],
		"en-IE" : ["040412345678", "0033112345678", "0851234567"],
		"en-IN" : ["01112345678", "00911112345678", "9127654321"],
		"en-NZ" : ["033452343", "006431234567", "0211234567"],					
		"en-SG" : ["61234567", "00133112345678", "81234567"],
		"en-US" : ["4563453434", "01133112345678"],					
		"es-ES" : ["912123456", "0034957123456", "616846357"],
		"es-MX" : ["015512345678", "0033112345678", "04412345678"],
		"fr-FR" : ["0412345678", "0033112345678", "0612345678"],
		"it-IT" : ["096212345678", "00390612345678", "3991234567"],
		"ja-JP" : ["0152410670", "01014084567890", "09017901357"],
		"ko-KR" : ["03134523434", "00233112345678", "01012345678"],
		"nl-BE" : ["0601234567", "003221234567", "0491234567"],
		"nl-NL" : ["0255123456", "0031201234567", "0612345678"],
		"pt-BR" : ["0211123456789", "004114084567890", "923456789"],
		"ru-RU" : ["88122345678", "81014084567890", "89012345678"],				
		"zh-Hans-CN" : ["010 12345678", "0033112345678", "15005179573"],
		"zh-CN" : ["010 12345678", "0033112345678", "15005179573"],
		"zh-Hant-TW" : ["039606537", "00214084567890", "0912345678"],
		"zh-TW" : ["039606537", "00214084567890", "0912345678"]
	};

	var rowCount = 0;
	var row =[];
	var phoneNumCate = ["local", "international", "mobile"];

 	//id="localpartial1"/><td id="localpartialfmt1"/><td id="localwholefmt1"/
 	// create table id dynamically. 
	var selectedPhoneList = phoneNumberList[currentLocale];
	if (selectedPhoneList !== undefined) {
		for (i=0; i<selectedPhoneList.length; i++) { //locale international, mobile
			//rowCount += selectedPhoneList[i].length;
			var count = 0;
			for (j=0; j< selectedPhoneList[i].length;j++) { //each field number
				//row[j] = "<tr class='gradeA'><td id=" + idList[i] + count + " /><td id=" +idList[i+1]+count+ " /><td id=" +idList[i+2]+count+" /><td id="+ idList[i+3]+count+" />"
				row[j] = "<tr class='gradeA'><td id=" + phoneNumCate[i]+"subject"+count+ " /><td id="+phoneNumCate[i]+"inputNum"+count+" /><td id="+phoneNumCate[i]+"partialFmt"+count + "/><td id="+phoneNumCate[i]+"wholeFmt"+count + " />";
							
				$('#phoneNumTable').append(row[count]);
				count++;
			}
		}
		var extractNumber = [];
		var parsed = [];
		var fmt = new PhoneFmt({locale: currentLocale});
		var numberFmt = [];
		var numberPartialFmt = [];
		//formatted = fmt.format(parsed, {partial: true});

		//PhoneNumber 
		for (i=0; i < selectedPhoneList.length; i++) {
			for(j=0; j< selectedPhoneList[i].length; j++) {
				extractNumber[j] = selectedPhoneList[i].substring(0,j+1);
				if (i === 0) { // local
					$("#localinputNum"+j).text(extractNumber[j]);
					parsed[j] = new PhoneNumber(extractNumber[j], {locale:currentLocale});
					
					numberPartialFmt[j] = fmt.format(parsed[j], {partial: true});
					$("#localpartialFmt"+j).text(numberPartialFmt[j]);

					numberFmt[j] = fmt.format(parsed[j]);
					$("#localwholeFmt"+j).text(numberFmt[j]);

				} else if (i === 1) { // international
					$("#internationalinputNum"+j).text(extractNumber[j]);
					parsed[j] = new PhoneNumber(extractNumber[j], {locale:currentLocale});
							
					numberPartialFmt[j] = fmt.format(parsed[j], {partial: true});
					$("#internationalpartialFmt"+j).text(numberPartialFmt[j]);

					numberFmt[j] = fmt.format(parsed[j]);
					$("#internationalwholeFmt"+j).text(numberFmt[j]);
				} else if (i === 2) { //mobile
					$("#mobileinputNum"+j).text(extractNumber[j]);
					parsed[j] = new PhoneNumber(extractNumber[j], {locale:currentLocale});
							
					numberPartialFmt[j] = fmt.format(parsed[j], {partial: true});
					$("#mobilepartialFmt"+j).text(numberPartialFmt[j]);

					numberFmt[j] = fmt.format(parsed[j]);
					$("#mobilewholeFmt"+j).text(numberFmt[j]);
				} 
			}
		}
		for (i=0; i < selectedPhoneList.length;i++) {
			$("#"+phoneNumCate[i]+"subject0").attr('rowSpan', selectedPhoneList[i].length);
			$("#"+phoneNumCate[i]+"subject0").text(phoneNumCate[i]);
			for (j=1; j < selectedPhoneList[i].length;j++) {
				 $("#"+phoneNumCate[i]+"subject" + j).remove();
			}
		}

	} else {
		row[0] = "<tr><td colspan='4' align='center'>Not supported yet </td>";
		$('#phoneNumTable').append(row[0]);
	}
	$("tr").addClass("gradeA");
	$("td").addClass("table-border-underine");
});				