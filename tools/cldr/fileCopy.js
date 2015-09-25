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

//var localeDir = "/home/goun/Source/i18nlib-code-cldrupdate-number/tools/cldr/temp";
//var targetDir = "/home/goun/Source/i18nlib-code-cldrupdate-number/js/data/locale";

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

localeDir = process.argv[2];
targetDir = process.argv[3];

function walk(root, dir) {
	var results = [];
	var list = fs.readdirSync(path.join(root, dir));


	list.forEach(function (file) {
		var sourcePathRelative = path.join(dir, file);
		var sourcePath = path.join(root, sourcePathRelative);
		
		var count = sourcePath.length - sourcePathRelative.length;
		var temp = sourcePath.slice(parseInt(count)-1,sourcePath.length);

		var stat = fs.statSync(sourcePath);
		if (stat && stat.isDirectory()) {
			walk(root, sourcePathRelative);
		} else {
			var obj;
			if (file.match(/\.jf$/)) {
				var fullPath = targetDir+temp;
				if (!fs.existsSync(fullPath)) {
					//Added newly created.
					console.log("fullPath : " + fullPath);
				}
				try {
					fse.copySync(sourcePath, targetDir + temp);
				} catch (err) {
					console.log("err!!! " + err)
					//process.exit(2);
				}
			}
		}
	});
}

walk(localeDir, "");
