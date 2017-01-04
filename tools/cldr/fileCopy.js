/* 
 * fileCopy.js -  tool for moving generated file easily which is
 *                result from executing conversion tool.
 *
 * Copyright © 2015, LGE
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


var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var util = require('util');
var common = require('./common.js');
var merge = common.merge;

localeDir = "/home/goun/Source/iLib_branch/iLib/tools/cldr/tmp";
targetDir = "/home/goun/Source/iLib_branch/iLib/js/data/locale/";

function usage() {
	util.print("Usage: fileCopy [-h] tool_result_dir locale_data_dir\n" +
		"Generate number formats information files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"tool_result_dir\n" +
		"  the top level of the result directory of executing conversion tool\n" +
		"locale_data_dir\n" +
		"  the top level of the ilib locale data directory\n");
	process.exit(1);
}
/*var localeDir = ".",
	localeDir = ".";
*/
//localeDir = process.argv[2]; //tmp.
//targetDir = process.argv[3]; //origin


util.print("temp locale dir: " + localeDir + "\n");
util.print("target locale dir: " + targetDir + "\n");


function walk(root, targetdir, dir) {
	var results = [];
	var list = fs.readdirSync(path.join(root, dir));
	
	list.forEach(function (file) {
		var sourcePathRelative = path.join(dir, file); //aa/DJ/sysres.json
		var sourcePath = path.join(root, sourcePathRelative); //tmp/aa/DJ/sysres.json
		
		var count = sourcePath.length - sourcePathRelative.length;
		var temp = sourcePath.slice(parseInt(count)-1,sourcePath.length); // //aa/DJ/sysres.json
		newneworiginData = {};
		var stat = fs.statSync(sourcePath);
		if (stat && stat.isDirectory()) {
			walk(root, targetdir, sourcePathRelative);
		} else {
			var obj;
			//if (file === 'dateformats.json') {
			if (file.match(/\.json$/)) {
				util.print("targetDir: " + targetdir  + "\n");
				if (!fs.existsSync(sourcePath)) {
					//In order to see which one is newly created.
					util.print("newly created targetdir : " + targetdir);
				}
				try {

					targetPath = targetdir + sourcePathRelative;
					originData = fs.readFileSync(targetPath, 'utf-8');

					newData = fs.readFileSync(sourcePath, 'utf-8');
					
					if (newData.length > 0) {
						originData = JSON.parse(originData);
						newData = JSON.parse(newData);
						try {

							/*if (file === 'dateformats.json') {
								if (typeof(originData) !== undefined &&
									typeof(originData["gregorian"]["range"]) !== undefined ) {
									newneworiginData["range"] = merge(newneworiginData, originData["gregorian"]["range"]);
								}
							} */

							var length = Object.keys(newData).length;
							var keys = Object.keys(newData);

							for (i=0; i < length; i++) {
								newneworiginData[keys[i]] = newData[keys[i]];
							}
							// if (file === 'dateformats.json') {
							// 	if (typeof(originData) !== undefined &&
							// 		typeof(originData["gregorian"]["range"]) !== undefined ) {
							// 		newneworiginData["gregorian"]["range"] = {};
							// 		//newneworiginData["gregorian"]["range"] = merge(newneworiginData, originData["gregorian"]["range"]);
							// 		newneworiginData["gregorian"]["range"] = originData["gregorian"]["range"];
							// 	}
							// } 
							if (file === 'sysres.json') {
								if (typeof(originData) !== undefined &&
									typeof(originData["durationMediumMillis"]) !== undefined ) {
									//newneworiginData["gregorian"]["range"] = {};
									newneworiginData["durationMediumMillis"] = {};
									newneworiginData["1#1 se|#{num} sec"] = {};
									newneworiginData["1#1 mi|#{num} min"] = {};
									newneworiginData["durationMediumHours"] = {};
									newneworiginData["1#1 dy|#{num} dys"] = {};
									newneworiginData["durationMediumWeeks"] = {};
									newneworiginData["1#1 mo|#{num} mos"] = {};
									newneworiginData["durationMediumYears"] = {};
							
									
									newneworiginData["durationMediumMillis"] = originData["durationMediumMillis"];
									newneworiginData["1#1 se|#{num} sec"] = originData["1#1 se|#{num} sec"];
									newneworiginData["1#1 mi|#{num} min"] = originData["1#1 mi|#{num} min"];
									newneworiginData["durationMediumHours"] = originData["durationMediumHours"];
									newneworiginData["1#1 dy|#{num} dys"] = originData["1#1 dy|#{num} dys"];
									newneworiginData["durationMediumWeeks"] = originData["durationMediumWeeks"];
									newneworiginData["1#1 mo|#{num} mos"] = originData["1#1 mo|#{num} mos"];
									newneworiginData["durationMediumYears"] = originData["durationMediumYears"];
								}
							}	
						} catch(err) {
						//util.print("Error\n");
						}
						
						fs.writeFileSync(targetPath, JSON.stringify(newneworiginData, undefined, 4), 'utf8');

					}
				} catch (err) {
					console.log("err!!! " + err)
					//process.exit(2);
				}
			}
		}
	});
}

walk(localeDir, targetDir,  "");
