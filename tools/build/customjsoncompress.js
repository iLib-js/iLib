/*
 * customjsoncompress.js - ilib tool to remove the whitespace from json files
 *
 * Copyright © 2013-2015, JEDLSoft
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
/*
 * This code is intended to be run under node.js
 */
var fs = require('fs');
var util = require('util');
var common = require('../cldr/common');
var path = require('../../js/lib/Path.js');

function usage() {
    util.print("Usage: customjsoncompress.js [-h] [source_dir] [target_dir] [custom_dir] [locale_list]\n" +
        "Find all json files and compress all the whitespace out of them.\n" +
        "It is possible if you want to overwrite the some of locale data.\n" +
        "you can choose the locale list only you want to copy.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "source_dir\n" +
        '  Where to put the results. Default "."\n' +
        "target_dir\n" +
        '  Where to put the results. Default "compressed"\n' +
        "custom_dir\n" +
        '  Where to put the results. Default "."\n' +
        "locale_list\n" +
        '  locale list. Need to write down with at least one locale."\n');
    process.exit(1);
}

var sourcedir = ".",
    targetdir = "compressed",
    localedir = ".";
    regiondir = [];
    scriptdir = {};
    languagedir = {};

if (process.argv.length > 2) {
    if (process.argv[2] == '-h' || process.argv[2] == '-H' || process.argv[2] == '--help') {
        usage();
    }
    sourcedir = process.argv[2] || ".";
    if (process.argv.length > 3) {
        targetdir = process.argv[3];
        customdir = process.argv[4] || ".";
        localeinfo = process.argv[5] || "";
        localeParsing(localeinfo);
    }
}

fs.exists(sourcedir, function (exists) {
    if (!exists) {
        util.print("Could not access source directory " + sourcedir + "\n");
        usage();
    }
});

fs.exists(targetdir, function (exists) {
    if (!exists) {
        try {
            common.makeDirs(targetdir);
        } catch (e) {
            util.print("Could not access or create target directory " + targetdir + "\nError: " + e + "\n");
            usage();
        }
    }
});

util.print("source dir: " + sourcedir + "\n");
util.print("target dir: " + targetdir + "\n");

walk(sourcedir, "");


function localeParsing(localeinfo) {
    var tempStr, tempcode;
    tempStr = localeinfo.replace(/(\s*)/g,"");
    localedir = tempStr.split(',');

    for(var i = 0; i< localedir.length; i++) {
        tempcode = localedir[i].split('-');
        if(languagedir[tempcode[0]] === undefined) {
            languagedir[tempcode[0]] = [];
        }
        if(tempcode[1] === "Latn" || tempcode[1] === "Cyrl" || tempcode[1] === "Arab" || tempcode[1] === "Hans" || tempcode[1] === "Hant") {
            if(regiondir.indexOf(tempcode[2]) < 0) {
                regiondir.push(tempcode[2]);
            }
            if(scriptdir[tempcode[2]] === undefined) {
                scriptdir[tempcode[2]] = {};
            }
            scriptdir[tempcode[2]][tempcode[0]] = tempcode[1];
            languagedir[tempcode[0]].push(tempcode[2]);
        } else {
            if(regiondir.indexOf(tempcode[1]) < 0) {
                regiondir.push(tempcode[1]);
            }
            languagedir[tempcode[0]].push(tempcode[1]);
        }
    }

    localedir.push('zoneinfo');
    localedir.push('nfkd');
}

function walk(root, dir) {
    var results = [];
    var list = fs.readdirSync(path.join(root, dir));

    list.forEach(function (file) {
        var sourcePathRelative = path.join(dir, file);
        var sourcePath = path.join(root, sourcePathRelative);
        var customDirPath = path.join(customdir, sourcePathRelative);
        var stat = fs.statSync(sourcePath);
        var sourcePathParse = sourcePath.split("/");
        var temp;
        //util.print("localedir : " +  localedir + "\n");

        if (stat && stat.isDirectory()) {
            if (languagedir[sourcePathParse[0]] !== undefined || sourcePath ==='und') {
                if(languagedir[file] !== undefined) {
                    temp = languagedir[file];
                    for(var i = 0; i < temp.length ; i++) {
                            if(scriptdir[temp[i]] !== undefined) {
                                try{
                                    fs.accessSync(path.join(sourcePath, scriptdir[temp[i]][file], temp[i]), fs.F_OK);
                                } catch(e) {
                                    walkException(root, path.join(sourcePath, scriptdir[temp[i]][file], temp[i]));
                                }
                            } else {
                                try {
                                    fs.accessSync(path.join(sourcePath, temp[i]), fs.F_OK);
                                } catch(e) {
                                    walkException(root, path.join(sourcePath, temp[i]));
                                }
                            }
                    }
                }
                walk(root, sourcePathRelative);
            } else if (regiondir.indexOf(sourcePathParse[1]) >-1) {
                walk(root, sourcePathRelative);
            } else if (sourcePathRelative=== 'nfkd' || sourcePathRelative === 'zoneinfo') {
                walkEtc(root, sourcePathRelative);
            }
        } else {
            var obj;
            if (file.match(/\.json$/)) {
                try {
                    var data = fs.readFileSync(sourcePath, 'utf8');
                    if (data.length > 0) {
                        obj = JSON.parse(data);
                        try {
                            var customData = fs.readFileSync(customDirPath, 'utf8');
                            customObj = JSON.parse(customData);
                            util.print("Override date in customDirPath: " + customDirPath + "\n");

                            var length = Object.keys(customObj).length;
                            var keys = Object.keys(customObj);

                            for (i=0; i < length; i++) {
                                obj[keys[i]] = customObj[keys[i]];
                            }
                            util.print(file + "-> ovverrided\n");
                        } catch (e) {
                            // util.print("No date to be overide\n");
                        }

                        var targetPath = path.join(targetdir, sourcePathRelative);
                        // util.print("compress " + sourcePath + " -> " + targetPath + "\n");

                        var targetDir = path.dirname(targetPath);
                        // util.print("dirname is " + targetDir + "\n");
                        common.makeDirs(targetDir);

                        // util.print("writing file " + targetPath + "\n");

                        fs.writeFileSync(targetPath, JSON.stringify(obj), 'utf8');
                    }
                } catch (err) {
                    util.print("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
                    util.print(err + "\n");
                    process.exit(2);
                }
            }
        }
    });
    return results;
}

function walkException(root, expath) {
    var results = [];
    try {
        var list = fs.readdirSync(path.join(customdir, expath));
    } catch (err) {
        return;
    }
    list.forEach(function (file) {
        var sourcePathRelative = path.join(expath, file);
        var sourcePath = path.join(root, sourcePathRelative);

        var customPath = path.join(customdir, sourcePathRelative);
        var targetDirPath = path.join(root, sourcePathRelative);

        var stat = fs.statSync(customPath);
        if (stat && stat.isDirectory()) {
            //TODO
            walkException(root, sourcePathRelative);
        } else {
            var obj;
            if (file.match(/\.json$/)) {
                try {
                    var data = fs.readFileSync(customPath, 'utf8');
                    if (data.length > 0) {
                        // before parsing, first remove comments which are not valid in real json
                        data = data.replace(/\/\/[^\n]*\n/g, "\n").replace(/\/\*(\*[^\/]|[^\*])*\*\//g, "");

                        obj = JSON.parse(data);
                        var targetPath = path.join(targetdir, sourcePathRelative);

                        util.print("compress + ovverrided " + sourcePath + " -> " + targetPath + "\n");

                        var targetDir = path.dirname(targetPath);
                        //util.print("dirname is " + targetDir + "\n");
                        common.makeDirs(targetDir);

                        //util.print("writing file " + targetPath + "\n");
                        fs.writeFileSync(targetPath, escape(JSON.stringify(obj)), 'utf8');
                    }
                } catch (err) {
                    util.print("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
                    util.print(err + "\n");
                    process.exit(2);
                }
            }
        }
    });

    return results;
}

// traverse only nfkd and zoneinfo path
function walkEtc(root, dir) {
    var results = [];
    var list = fs.readdirSync(path.join(root, dir));

    list.forEach(function (file) {
        var sourcePathRelative = path.join(dir, file);
        var sourcePath = path.join(root, sourcePathRelative);
        var stat = fs.statSync(sourcePath);
        var sourcePathParse = sourcePath.split("/");

        if (stat && stat.isDirectory()) {
            walkEtc(root, sourcePathRelative);
        } else {
            var obj;
            if (file.match(/\.json$/)) {
                try {
                    var data = fs.readFileSync(sourcePath, 'utf8');
                    if (data.length > 0) {
                        obj = JSON.parse(data);
                        var targetPath = path.join(targetdir, sourcePathRelative);
                        var targetDir = path.dirname(targetPath);
                        common.makeDirs(targetDir);
                        fs.writeFileSync(targetPath, JSON.stringify(obj), 'utf8');
                    }
                } catch (err) {
                    util.print("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
                    util.print(err + "\n");
                    process.exit(2);
                }
            }
        }
    });
    return results;
}

//escape some of these Unicode characters because Google Closure Compiler doesn't like them
function escape(str) {
    var output = "";

    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        var c = str.charCodeAt(i);
        if ((c >= 0x2028 && c <= 0x2030) ||  // punct
            (c >= 0xDC00 && c <= 0xDFFF) ||  // high surrogates
            (c >= 0xD800 && c <= 0xDB7F)) {  // low surrogates
            output += "\\u" + common.toHexString(ch);
        } else {
            output += ch;
        }
    }

    return output;
}