/*
 * genDayofWeek.js - ilib tool to generate the json data about day of the week
 * 
 * Copyright © 2013, JEDLSoft
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
 * See the License for the specific day_of_week governing permissions and
 * limitations under the License.
 */

/*
 * This code is intended to be run under node.js 
 */

var fs = require('fs');
var util = require('util');
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var coelesce = common.coelesce;

function usage() {
	util.print("Usage: genDayofWeek [-h] CLDR_dir [toDir]\n" +
			"Generate the day_of_week.jf files for each day_of_week.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"CLDR_dir\n" +
			"  directory with CLDR represented in json format downloaded from the Unicode site\n" +
			"toDir\n" +
			"  directory to output the day_of_week.jf json files. Default: current dir.\n");
	process.exit(1);
}

var cldrDir, languageDataFileName;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 3) {
	util.error('Error: not enough arguments');
	usage();
}

cldrDir = process.argv[2];
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

util.print("genDayofWeek - generate the localeinfo day_of_week.jf files.\n" +
		"Copyright (c) 2013 JEDLSoft\n");

util.print("CLDR dir: " + cldrDir + "\n");
util.print("output dir: " + toDir + "\n");

languageDataFileName = cldrDir + "/supplemental/supplementalData.json";

fs.exists(languageDataFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + languageDataFileName);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});


var languageDataString = fs.readFileSync(languageDataFileName, "utf-8");
var supplementalData = JSON.parse(languageDataString);
var firstDayOfWeekData = supplementalData.weekData.firstDay;
//util.print("data is "+ JSON.stringify(firstDayOfWeekData));



for (var day_of_week in firstDayOfWeekData) {
	var filename;
	//util.print("day of the week is :"+day_of_week+"\n");
	//util.print("firstDayOfWeekData  is "+firstDayOfWeekData[day_of_week]);
	
	if (day_of_week && firstDayOfWeekData[day_of_week]) {
	if(day_of_week.length<9){
	 if(day_of_week==001){
		filename = toDir + '/' ;
					}
		else{

		filename = toDir + '/'+'und/' + day_of_week;
		}
		
		
		if (!fs.existsSync(filename)) {
			fs.mkdirSync(filename);
		}
		console.log(day_of_week + ':\t"day_of_week": ' + JSON.stringify(firstDayOfWeekData[day_of_week]));
		var dayProperties = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		for (var i=0;i<7;i++){
		if(firstDayOfWeekData[day_of_week]===dayProperties[i]){
		fs.writeFile(filename + "/firstdayofweek.jf", '\t"firstDayOfWeek": ' + /*JSON.stringify(firstDayOfWeekData[day_of_week]) */i+ ',\n', function (err) {
						if (err) {
						console.log(err);
						throw err;
							}
					});
				}
			}
		}
	    }
	//}
}

