$(function(){
	var transferredLocale = parent.document.all["iframeName"].value || "en-GB";
	console.log("transferredLocale: ", transferredLocale);

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
	var month = ["jan", "feb", "mar", "apr", "may","jun", "jul", "aug", "sep","oct","nov", "dec", "etc"];
	var week = ["sun", "mon", "tue", "wed", "thu", "fri","sat"];

	var dayCount = 0, monthCount = 0, fmtArrayCount;

	for (i=0; i<7; i++) {
		if (currentLocale === "am-ET") {
			date[i] = new DateFactory({year: 2015, month: 8, day: i+7, type:li.getCalendar()});	
		} else {
			date[i] = new DateFactory({year: 2015, month: 8, day: i+2, type:li.getCalendar()});	
		}
		
		for (j=0; j < 4; j++) {
			fmt[j] = new DateFmt({locale: currentLocale, date:"w", length: length[j], useNative: false, timezone: 'local'});
			value[i] = fmt[j].format(date[i]);
			nameOfDay[dayCount] = value[i];
			weekID[dayCount] = week[i]+length[j]
			dayCount++;
		}
	}

	var loopLength;
	if (currentLocale === "am-ET" || currentLocale === "en-ET") {
		loopLength = 13;
	} else {
		loopLength = 12;
	}
	
	for (i=0; i < loopLength; i++) {
		date[i] = new DateFactory({month: i+1, type:li.getCalendar()});
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

	if (currentLocale === "am-ET" || currentLocale === "en-ET" ) {
		$("#extraLength").text("13");	
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

	var date = new GregorianDate({locale: currentLocale, year: 2015, month: 8, day: 5, hour: 13, minute: 45, second: 0});

	
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
	var templateText = [];

	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
		
		fmt[i] = new DateFmt({locale: currentLocale, type: "date", date:"dmwy", length: length[i], useNative: false, timezone: 'local'});
		
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		
		$("#date"+length[i]).text(length[i]);
		
		templateText[i] = fmtArray[i].template;
		$("#date"+length[i]+"Fmt").text(templateText[i]);
		var mCount = 0;
		for (j=0;j < templateText[i].length; j++) {
			if (templateText[i][j] === 'M') {
				mCount++;
			}
		}

		switch(mCount) {
			case 4:
				$("#date"+length[i]+"Fmt").css("color","red");
			break;
			case 3:
				$("#date"+length[i]+"Fmt").css("color","#DAA520"); //GoldenRod 
			break;
			case 2:
				$("#date"+length[i]+"Fmt").css("color","green");
			break;
			case 1:
				$("#date"+length[i]+"Fmt").css("color","blue");
			break;
			default:
				$("#date"+length[i]+"Fmt").css("color","#4B0082"); //Indigo  
		}
		$("#date"+length[i]+"Sample").text(fmtArray[i].format(date));
	}
	
	//Time
	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
		fmt[i] = new DateFmt({locale: currentLocale, type: "time", time:"ahmsz", length: length[i], useNative: false, timezone: 'local'});
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		
		$("#time"+length[i]).text(length[i]);
		$("#time"+length[i]+"Fmt").text(fmtArray[i].template);

		if (length[i] === 'full') {
			if(fmtArray[i].template.indexOf("H") !== -1) { //24hours
				$("#time"+length[i]+"Fmt").css("color", "#FF1493"); //#DeepPink 
			} else { // 12hours
				$("#time"+length[i]+"Fmt").css("color", "#00BFFF"); //DeepSkyBlue 
			}
		}
		$("#time"+length[i]+"Sample").text(fmtArray[i].format(date));
	}

	//Date Range
	var start = new DateFactory({year: 2011,month: 11,day: 20,hour: 13,minute: 45,second: 0,type:li.getCalendar()});
	var end = new DateFactory({year: 2013,month: 1,day: 31,hour: 14,minute: 30,second: 0,type:li.getCalendar()});

	for(i = 0,fmtArrayCount=0; i < 4; i++,fmtArrayCount++) {
		fmt[i] = new DateRngFmt({locale: currentLocale, length: length[i]});
		fmtArray[fmtArrayCount] = fmt[i];
		//console.log("  fmtArray : ", fmtArray[fmtArrayCount]);
		$("#daterng"+length[i]).text(length[i]);
		$("#daterng"+length[i]+"Sample").text(fmtArray[i].format(start, end));
	}

	durationNumberSample = {
		"af-ZA" : [1,2],
		"sq-AL" : [1,16],
		"sq-ME" : [1,17],
		"am-ET" : [1,18],
		"ar-DZ" : [1,2,3,11,100],
		"ar-BH" : [1,2,10,26,102],
		"ar-DJ" : [1,2,103,26,200],
		"ar-EG" : [1,2,110,112,202],
		"ar-IQ" : [1,2,3,11,100],
		"ar-JO" : [1,2,103,99,300],
		"ar-KW" : [1,2,3,11,100],
		"ar-LB" : [1,2,3,11,100],
		"ar-LY" : [1,2,3,11,100],
		"ar-MR" : [1,2,3,11,100],
		"ar-MA" : [1,2,3,11,100],
		"ar-OM" : [1,2,3,11,100],
		"ar-QA" : [1,2,3,11,100],
		"ar-SA" : [1,2,3,11,100],
		"ar-SD" : [1,2,3,11,100],
		"ar-SY" : [1,2,3,11,100],
		"ar-TN" : [1,2,3,11,100],
		"ar-AE" : [1,2,3,11,100],
		"ar-YE" : [1,2,3,11,100],
		"as-IN" : [1,2],
		"bn-IN" : [1,18],
		"bs-BA" : [1,4,5],
		"bs-ME" : [1,2,20],
		"bg-BG" : [1,2],
		"zh-Hans-CN" : [1],
		"zh-Hans-MY" : [15],
		"zh-Hans-SG" : [16],
		"zh-Hant-HK" : [2],
		"zh-Hant-TW" : [1],
		"hr-HR" : [1,2,5],
		"hr-ME" : [1,4,19],
		"cs-CZ" : [1,2,5],
		"da-DK" : [1,2],
		"nl-BE" : [1,2],
		"nl-NL" : [1,2],
		"en-AM" : [1,2],
		"en-AU" : [1,16],
		"en-AZ" : [1,17],
		"en-CA" : [1,2],
		"en-CN" : [1,2],
		"en-ET" : [1,2],
		"en-GM" : [1,2],
		"en-GE" : [1,2],
		"en-GH" : [1,2],
		"en-GB" : [1,2],
		"en-HK" : [1,2],
		"en-IS" : [1,2],
		"en-IN" : [1,2],
		"en-IE" : [1,2],
		"en-JP" : [1,2],
		"en-KE" : [1,2],
		"en-LR" : [1,2],
		"en-MW" : [1,2],
		"en-MY" : [1,2],
		"en-MX" : [1,2],
		"en-MM" : [1,2],
		"en-NZ" : [1,2],
		"en-NG" : [1,2],
		"en-PK" : [1,2],
		"en-PH" : [1,2],
		"en-PR" : [1,2],
		"en-KR" : [1,2],
		"en-RW" : [1,2],
		"en-SL" : [1,2],
		"en-SG" : [1,2],
		"en-ZA" : [1,2],
		"en-LK" : [1,2],
		"en-SD" : [1,2],
		"en-TW" : [1,2],
		"en-UG" : [1,2],
		"en-TZ" : [1,2],
		"en-US" : [1,2],
		"en-ZM" : [1,2],
		"et-EE" : [1,2],
		"fa-AF" : [1,2],
		"fa-IR" : [1,18],
		"fi-FI" : [1,17],
		"fr-DZ" : [1,2],
		"fr-BE" : [1,16],
		"fr-BJ" : [1,17],
		"fr-BF" : [1,2],
		"fr-CM" : [1,16],
		"fr-CA" : [1,17],
		"fr-CF" : [1,2],
		"fr-CG" : [1,16],
		"fr-CD" : [1,17],
		"fr-DJ" : [1,2],
		"fr-GQ" : [1,16],
		"fr-FR" : [1,17],
		"fr-GA" : [1,2],
		"fr-GN" : [1,16],
		"fr-CI" : [1,17],
		"fr-LB" : [1,2],
		"fr-LU" : [1,16],
		"fr-ML" : [1,17],
		"fr-RW" : [1,2],
		"fr-SN" : [1,16],
		"fr-CH" : [1,17],
		"fr-TG" : [1,2],
		"ga-IE" : [1,2,3,7,11],
		"de-AT" : [1,2],
		"de-DE" : [1,16],
		"de-LU" : [1,17],
		"de-CH" : [1,2],
		"el-CY" : [1,2],
		"el-GR" : [1,17],
		"gu-IN" : [1,2],
		"ha-Latn-NG" : [1,2],
		"he-IL" : [1,2,20,19],
		"hi-IN" : [1,2],
		"hu-HU" : [1,17],
		"id-ID" : [1,2],
		"it-IT" : [1,2],
		"it-CH" : [1,17],
		"ja-JP" : [1,16],
		"kn-IN" : [1,2],
		"kk-KZ" : [1,2],
		"ko-KR" : [1,2],
		"ku-IQ" : [1,2],
		"lv-LV" : [10,21,9],
		"lt-LT" : [21,9,11],
		"mk-MK" : [1,2],
		"ms-MY" : [1,2],
		"ms-SG" : [1,2],
		"ml-IN" : [1,2],
		"mr-IN" : [1,18],
		"mn-Cyrl-MN" : [1,2,3],
		"nb-NO" : [1,2],
		"or-IN" : [1,17],
		"pa-IN" : [1,2],
		"pa-Arab-PK" : [1,18],
		"pl-PL" : [1,2,5],
		"pt-AO" : [1,2],
		"pt-BR" : [1,17],
		"pt-CV" : [1,18],
		"pt-GQ" : [1,2],
		"pt-PT" : [1,17],
		"ro-RO" : [1,2,20],
		"ru-BY" : [1,2,5],
		"ru-GE" : [21,4,19],
		"ru-KZ" : [31,22,20],
		"ru-KG" : [41,24,25],
		"ru-RU" : [31,32,19],
		"ru-UA" : [1,2,5],
		"sr-Latn-RS" : [1,2,5],
		"sr-Cyrl-RS" : [1,4,20],
		"sk-SK" : [1,2,5],
		"sl-SI" : [1,2,3,5],
		"es-AR" : [1,2],
		"es-BO" : [1,16],
		"es-CA" : [1,17],
		"es-CL" : [1,2],
		"es-CO" : [1,16],
		"es-CR" : [1,17],
		"es-DO" : [1,2],
		"es-EC" : [1,16],
		"es-SV" : [1,17],
		"es-GQ" : [1,2],
		"es-GT" : [1,16],
		"es-HN" : [1,17],
		"es-MX" : [1,2],
		"es-NI" : [1,16],
		"es-PA" : [1,17],
		"es-PY" : [1,2],
		"es-PE" : [1,16],
		"es-PH" : [1,17],
		"es-PR" : [1,2],
		"es-ES" : [1,16],
		"es-US" : [1,17],
		"es-UY" : [1,2],
		"es-VE" : [1,16],
		"sv-FI" : [1,2],
		"sv-SE" : [1,17],
		"ta-IN" : [1,2],
		"te-IN" : [1,16],
		"th-TH" : [1,16],
		"tr-AM" : [1,2],
		"tr-AZ" : [1,16],
		"tr-CY" : [1,17],
		"tr-TR" : [1,2],
		"uk-UA" : [1,2,5],
		"ur-IN" : [1,2],
		"ur-PK" : [1,17],
		"uz-Latn-UZ" : [1,2],
		"vi-VN" : [1,2]
	};

	var selectedSampleNum = durationNumberSample[currentLocale];

	row = [];
	timeRow = [];
	for (i=0; i < selectedSampleNum.length; i++) {
		//rowCount += selectedPhoneList[i].length;
		var count = 0;
		for (j=0; j < 4; j++) {
			row[j] = "<tr class='gradeA'><td id=" + "subject"+ length[j]+ "num" + i + " /><td id="+"durFmtLength"+length[j]+"num" + i+" /><td id="+"durFmtResult"+length[j] +"num" + i + "/>";
			$('#durationTable').append(row[j]);

			timeRow[j] = "<tr class='gradeA'><td id=" + "timesubject"+ length[j]+ "num" + i + " /><td id="+"timedurFmtLength"+length[j]+"num" + i+" /><td id="+"timedurFmtResult"+length[j] +"num" + i + "/>";
			$('#durationTimeTable').append(timeRow[j]);

			count++;
		}
	}

	durDate =[];
	rangefmt = [];
	durfmtArray = [];

	timerangefmt = [];
	timedurfmtArray = [];

	for (i=0; i < selectedSampleNum.length; i++) {
		for (j=0,fmtArrayCount=0; j <4; j++, fmtArrayCount++) {
			rangefmt[j] = new DurationFmt({locale: currentLocale, style:"text", length: length[j]});
			durfmtArray[fmtArrayCount] = rangefmt[j];

			$("#durFmtLength"+length[j] + "num" +i).text(length[j]);
			durationDateSample = {year: selectedSampleNum[i],month: selectedSampleNum[i],week: selectedSampleNum[i],day: selectedSampleNum[i]};
			$("#durFmtResult"+length[j]+"num"+i).text(durfmtArray[j].format(durationDateSample).toString());

			timerangefmt[j] = new DurationFmt({locale: currentLocale, style:"clock", length: length[j]});
			timedurfmtArray[fmtArrayCount] = rangefmt[j];

			$("#timedurFmtLength"+length[j] + "num" +i).text(length[j]);
			durationTimeSample = {hour: selectedSampleNum[i],minute: selectedSampleNum[i],second: selectedSampleNum[i]};
			$("#timedurFmtResult"+length[j]+"num"+i).text(durfmtArray[j].format(durationTimeSample).toString());

			if (length[j] === 'medium' || length[j] === 'long') {
				//console.log("medium or long :" + length[j]);
				$("#durFmtResult"+length[j]+"num"+i).css("color","#CC3333");
				$("#timedurFmtResult"+length[j]+"num"+i).css("color","#CC3333");
			} else if (length[j] === 'short') {
				//console.log("full :" + length[j]);
				$("#durFmtLength"+length[j]+"num"+i).css("border-color","black");
				$("#durFmtLength"+length[j]+"num"+i).css("border-width","2px");

				$("#durFmtResult"+length[j]+"num"+i).css("border-color","black");
				$("#durFmtResult"+length[j]+"num"+i).css("border-width","2px");

				$("#timedurFmtLength"+length[j]+"num"+i).css("border-color","black");
				$("#timedurFmtLength"+length[j]+"num"+i).css("border-width","2px");

				$("#timedurFmtResult"+length[j]+"num"+i).css("border-color","black");
				$("#timedurFmtResult"+length[j]+"num"+i).css("border-width","2px");
			}

		}
	}

	$("#subjectfullnum0").attr('rowSpan', selectedSampleNum.length *4);
	$("#subjectfullnum0").text("Date");

	$("#timesubjectfullnum0").attr('rowSpan', selectedSampleNum.length *4);
	$("#timesubjectfullnum0").text("Time");

	for(i=1; i< selectedSampleNum.length; i++) {
		for (j=0; j <4; j++) {
			//console.log("LOG: " + " #subject"+length[j]+"num" + i);
			$("#subject"+length[j]+"num" + i).remove();
			$("#timesubject"+length[j]+"num" + i).remove();
		}
	}
	$("#subjectlongnum0").remove();
	$("#subjectmediumnum0").remove();
	$("#subjectshortnum0").remove();

	$("#timesubjectlongnum0").remove();
	$("#timesubjectmediumnum0").remove();
	$("#timesubjectshortnum0").remove();

	// Number Formatting
	var fmt = new NumFmt({locale: currentLocale,type: "standard"});
	$("#numDecimalSymbol").text(li.getDecimalSeparator());
	$("#numDecimal").text(fmt.format(1.734));

	var fmt = new NumFmt({locale: currentLocale,style: "standard"});
	$("#numGroupSymbol").text(li.getGroupingSeparator());
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