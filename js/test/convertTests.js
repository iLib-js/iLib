/* 
 * convertTests.js - ilib tool to convert jsunit tests to nodeunit tests
 *  
 * Copyright © 2017, JEDLSoft
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
var path = require('path');
var util = require('util');

var reVar = /^var (\w*) = require\("([^)]*)"\);/;
var reFunction = /^function (\w*)\(\) \{/;
var reCopyright = /^ \* Copyright © (20..)(,20..)?(-20..)?(.*)/;

var assertMappings = [
	{re: /(\s*)assertEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.equal($6, $2)"},
	{re: /(\s*)assertNotEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.notEqual($6, $2)"},
	{re: /(\s*)assertUndefined\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: '    $1test.ok(typeof($2) === "undefined")'},
	{re: /(\s*)assertNotUndefined\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: '    $1test.ok(typeof($2) !== "undefined")'},
	{re: /(\s*)assertNull\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2 === null)"},
	{re: /(\s*)assertNotNull\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2 !== null)"},
	{re: /(\s*)assertTrue\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2)"},
	{re: /(\s*)assertFalse\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok(!$2)"},
	{re: /(\s*)assertNaN\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2 === NaN)"},
	{re: /(\s*)assertNotNaN\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2 !== NaN)"},
	{re: /(\s*)assertObjectEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.deepEqual($6, $2)"},
	{re: /(\s*)assertRoughlyEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.roughlyEqual($6, $2, $10)"},
	{re: /(\s*)assertArrayEqualsIgnoringOrder\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.equalIgnoringOrder($6, $2)"},
	{re: /(\s*)fail\(\)./, replace: "        test.fail()"}
];

function convertFile(dir, fileName) {
	var testFile = path.join(dir, "test", fileName);
	var data = fs.readFileSync(testFile, "utf-8");
	
	var lines = data.split("\n");
	
	var i = 0, j;
	var match, firstFunction = true;
	var numberOfTests, firstLineOfTest;
	
	while (i < lines.length) {
        if (lines[i]) {
            lines[i] = lines[i].replace(/\t/g, '    ');
        }
		match = reVar.exec(lines[i]);
		if (match !== null) {
			lines.splice(i, 1,
				'if (typeof(' + match[1] + ') === "undefined") {',
				'    var ' + match[1] + ' = require("../../' + match[2] + '");',
				'}'
			);
			i += 3;
		} else {
			match = reFunction.exec(lines[i]);
			if (match !== null) {
				if (firstFunction) {
					firstFunction = false;
					
					var baseName = path.basename(fileName, ".js").replace("-", "_");
					
					lines.splice(i, 1,
					    'if (typeof(ilib) === "undefined") {',
					    '    var ilib = require("../../..");',
					    '}',
					    '',
						'module.exports.' + baseName + ' = {',
					    '    setUp: function(callback) {',
					    '        ilib.clearCache();',
					    '        callback();',
					    '    },',
					    '',
                        '    ' + match[1] + ': function(test) {'
					);
					numberOfTests = 0;
					i += 11;
					firstLineOfTest = i;
				} else {
					lines[i] = '    ' + match[1] + ': function(test) {';
					numberOfTests = 0;
					i++;
					firstLineOfTest = i;
				}
			} else if (firstFunction) {
			    match = reCopyright.exec(lines[i]);
			    if (match !== null) {
			        if (match[3]) {
			            if (match[3] === "-2016") {
			                lines[i] = " * Copyright © " + match[1] + "-2017" + match[4];
			            } else {
			                lines[i] = " * Copyright © " + match[1] + match[3] +",2017" + match[4];
			            }
			        } else if (match[2]) {
                        if (match[2] === ",2016") {
                            lines[i] = " * Copyright © " + match[1] + match[2] + "-2017" + match[4];
                        } else {
                            lines[i] = " * Copyright © " + match[1] + match[2] +",2017" + match[4];
                        }
			        } else {
                        if (match[1] === "2016") {
                            lines[i] = " * Copyright © " + match[1] + "-2017" + match[4];
                        } else {
                            lines[i] = " * Copyright © " + match[1] +",2017" + match[4];
                        }
			        }
			    }
			    i++;
            } else if (lines[i][0] === '}') {
                lines.splice(i, 1, '        test.done();', '    },');
                lines.splice(firstLineOfTest, 0, '        test.expect(' + numberOfTests + ');');
                i += 3;
			} else {
			    var mapped = false;
				for (j = 0; j < assertMappings.length; j++) {
					var re = assertMappings[j].re;
					match = re.exec(lines[i]);
					if (match !== null) {
						lines[i] = lines[i].replace(re, assertMappings[j].replace);
						numberOfTests++;
						mapped = true;
						break;
					}
				}
				
				if (!mapped) {
				    // increase the indent for non-mapped lines
				    lines[i] = "    " + lines[i];
				}

				i++;
			}
		}		
	}
	
	// now run backwards and remove the last comma after the last function if it's there
	i = lines.length-1;
	while (i > 0) {
		if (lines[i] === "    }") {
			break;
		} else if (lines[i] === "    },") {
			lines[i] = "    }";
			break;
		}
		i--;
	}
	
	lines.push('};');
	
	var outDir = path.join(dir, "nodeunit");
	if (!fs.existsSync(outDir)) {
		fs.mkdirSync(outDir);
	}
	
	var outFile = path.join(outDir, fileName);
	fs.writeFileSync(outFile, lines.join('\n'), "utf-8");
	
	console.log(testFile + " -> " + outFile);
}

function generateSuiteJS(dir, tests) {
    var lines = [
        '/*',
        '* testSuite.js - test suite for this directory',
        ' * ',
        ' * Copyright © 2014-2015, JEDLSoft',
        ' *',
        ' * Licensed under the Apache License, Version 2.0 (the "License");',
        ' * you may not use this file except in compliance with the License.',
        ' * You may obtain a copy of the License at',
        ' *',
        ' *     http://www.apache.org/licenses/LICENSE-2.0',
        ' *',
        ' * Unless required by applicable law or agreed to in writing, software',
        ' * distributed under the License is distributed on an "AS IS" BASIS,',
        ' * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
        ' *',
        ' * See the License for the specific language governing permissions and',
        ' * limitations under the License.',
        ' */',
        '',
        'var nodeunit = require("nodeunit");',
        'var modules = {}',
        'var suites = ['
    ];
    
    tests.forEach(function(test) {
        lines.push('    "' + test + '",');
    });
    
    lines = lines.concat([
        '];',
        '',
        'suites.forEach(function (path) {',
        '    var test = require("./" + path);',
        '    for (var suite in test) {',
        '        modules[suite] = test[suite];',
        '    }',
        '});',
        '',
        'nodeunit.run(modules);'
    ]);
    
    var outFile = path.join(dir, "nodeunit", "testSuite.js");
    fs.writeFileSync(outFile, lines.join('\n'), "utf-8");
}

var suites = fs.readdirSync(".");
var pathName, relPath, included, stat;

suites.forEach(function (dir) {
	stat = fs.statSync(dir);
	if (stat && stat.isDirectory()) {
		var testDir = path.join(dir, "test");
		if (fs.existsSync(testDir)) {
		    var suite = [];
		    var tests = fs.readdirSync(testDir);
			tests.forEach(function(test) {
				if (test.substr(-3) === ".js" && test.substring(0, 4) === "test" && test.indexOf("uite") === -1) {
				    suite.push(test);
					var full = path.join(testDir, test);
					stat = fs.statSync(full);
					if (stat && stat.isFile()) {
						convertFile(dir, test);
					}
				}
			});
			
			generateSuiteJS(dir, suite);
		}
	}
});
