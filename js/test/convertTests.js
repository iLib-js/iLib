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
var reFunction = /^function\s+(test\w*)\s*\(\)\s*\{/;
var reCopyright = /^ \* Copyright © (20..)(,20..)?(-20..)?(.*)/;
var reLoops = /^\s*(for |while |\} catch |\w+\.forEach|bisectionSearch)/;
var reReturn = /^(\s*)return/;
var reGetPlatform = /(ilib\._getPlatform\(\)|isDynData\(\)|isDynCode\(\)|typeof\(Intl\))/;

var assertMappings = [
    {re: /(\s*)assertEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.equal($6, $2)"},
    {re: /(\s*)assertEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.equal($10, $6, $2)"},
    {re: /(\s*)assertNotEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.notEqual($6, $2)"},
    {re: /(\s*)assertUndefined\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: '    $1test.ok(typeof($2) === "undefined")'},
    {re: /(\s*)assertNotUndefined\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: '    $1test.ok(typeof($2) !== "undefined")'},
    {re: /(\s*)assertNull\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2 === null)"},
    {re: /(\s*)assertNotNull\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2 !== null)"},
    {re: /(\s*)assertTrue\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($2)"},
    {re: /(\s*)assertTrue\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok($6, $2)"},
    {re: /(\s*)assertFalse\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok(!$2)"},
    {re: /(\s*)assertFalse\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok(!$6, $2)"},
    {re: /(\s*)assertNaN\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok(isNaN($2))"},
    {re: /(\s*)assertNotNaN\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.ok(!isNaN($2))"},
    {re: /(\s*)assertObjectEquals\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.deepEqual($6, $2)"},
    {re: /(\s*)assertContains\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.contains($6, $2)"},
    {re: /(\s*)assertObjectContains\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.contains($6, $2)"},
    {re: /(\s*)assertRoughlyEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.roughlyEqual($10, $6, $14, $2)"},
    {re: /(\s*)assertRoughlyEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.roughlyEqual($6, $2, $10)"},
    {re: /(\s*)assertArrayEquals\((([^'",]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.deepEqual($6, $2)"},
    {re: /(\s*)assertArrayEqualsIgnoringOrder\((([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*),\s*(([^'"]|'(\\'|[^'])*?'|"(\\"|[^"])*?")*)\)/, replace: "    $1test.equalIgnoringOrder($6, $2)"}
];

var nonAssertMappings = [
    {re: /(\s*)fail\(\)./, replace: "        test.fail();"},
    {re: /^(\s*)info\(/, replace: "$1// console.log("},
    {re: /\.\/root\/test\/testfiles/, replace: "../test/testfiles"}
];

function convertFile(dir, fileName, outFileName) {
    var testFile = path.join(dir, "test", fileName);
    var data = fs.readFileSync(testFile, "utf-8");

    var lines = data.split("\n");

    var i = 0, j;
    var match, firstFunction = true, foundLoops = false, foundGetPlatform = false;
    var numberOfTests, firstLineOfTest, firstAssertion, lastAssertion, firstReturn;

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

                    var baseName = path.basename(fileName, ".js").replace(/-/g, "_");

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
                    i += 11;
                } else {
                    lines[i] = '    ' + match[1] + ': function(test) {';
                    i++;
                }
                numberOfTests = 0;
                firstLineOfTest = i;
                foundLoops = false;
                foundGetPlatform = false;
                lastAssertion = -1;
                firstAssertion = 0;
                firstReturn = lines.length;
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
                if (lastAssertion > -1 && !foundLoops) {
                    lines[i] = '    },';
                    var match = /^(\s+)/.exec(lines[lastAssertion]);
                    var indent = "        ";
                    if (match !== null) {
                        var indent = match[1];
                    }
                    lines.splice(lastAssertion + 1, 0, indent + 'test.done();');
                } else {
                    lines.splice(i, 1, '        test.done();', '    },');
                }
                i += 2;

                if (!foundLoops) {
                    var lineno = (firstReturn < firstAssertion) ? firstAssertion : firstLineOfTest;
                    lines.splice(lineno, 0, '        test.expect(' + numberOfTests + ');');
                    i++;
                }
            } else {
                var mapped = false;
                for (j = 0; j < assertMappings.length; j++) {
                    var re = assertMappings[j].re;
                    match = re.exec(lines[i]);
                    if (match !== null) {
                        lines[i] = lines[i].replace(re, assertMappings[j].replace);
                        numberOfTests++;
                        mapped = true;
                        lastAssertion = i;
                        if (!firstAssertion) {
                            firstAssertion = i;
                        }
                        break;
                    }
                }

                for (j = 0; j < nonAssertMappings.length; j++) {
                    var re = nonAssertMappings[j].re;
                    match = re.exec(lines[i]);
                    if (match !== null) {
                        lines[i] = lines[i].replace(re, nonAssertMappings[j].replace);
                    }
                }

                if (!foundLoops && (match = reReturn.exec(lines[i])) !== null) {
                    if (i < firstReturn) {
                        firstReturn = i;
                    }

                    if (foundGetPlatform) {
                        lines.splice(i, 0, '    ' + match[1] + 'test.done();');
                        i++;
                    }
                }

                if (reGetPlatform.exec(lines[i]) !== null) {
                    foundGetPlatform = true;
                }

                if (reLoops.exec(lines[i]) !== null) {
                    // when there's a loop, we don't know how many tests to expect, so leave off the test.expect() call
                    foundLoops = true;
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

    if (!outFileName) {
        outFileName = fileName;
    }

    var outDir = path.join(dir, "nodeunit");
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
    }

    var outFile = path.join(outDir, outFileName);
    fs.writeFileSync(outFile, lines.join('\n'), "utf-8");

    console.log(testFile + " -> " + outFile);
}

function generateSuiteJS(dir, tests) {
    var lines = [
        '/*',
        ' * testSuite.js - test suite for this directory',
        ' * ',
        ' * Copyright © 2017, JEDLSoft',
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
        'var reporter = nodeunit.reporters.minimal;',
        'var modules = {};',
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
        'reporter.run(modules);'
    ]);

    var outFile = path.join(dir, "nodeunit", "testSuite.js");
    fs.writeFileSync(outFile, lines.join('\n'), "utf-8");

    lines = [
        '/*',
        ' * testSuiteFiles.js - list the test files in this directory',
        ' * ',
        ' * Copyright © 2017, JEDLSoft',
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
        'module.exports.files = ['
    ];
    tests.forEach(function(test) {
        lines.push('    "' + test + '",');
    });

    lines.push('];');

    var outFile = path.join(dir, "nodeunit", "testSuiteFiles.js");
    fs.writeFileSync(outFile, lines.join('\n'), "utf-8");
}

function generateSuiteHTML(dir, tests) {
    var lines = [
        '<!--',
        'testSuite.html - browser-based test suite for this directory',
        '',
        'Copyright © 2017, JEDLSoft',
        '',
        'Licensed under the Apache License, Version 2.0 (the "License");',
        'you may not use this file except in compliance with the License.',
        'You may obtain a copy of the License at',
        '',
        '    http://www.apache.org/licenses/LICENSE-2.0',
        '',
        'Unless required by applicable law or agreed to in writing, software',
        'distributed under the License is distributed on an "AS IS" BASIS,',
        'WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
        '',
        'See the License for the specific language governing permissions and',
        'limitations under the License.',
        '-->',
        '<html>',
        '  <head>',
        '    <title>Test Suite</title>',
        '    <link rel="stylesheet" href="/test/nodeunit.css" type="text/css" />',
        '    <script>',
        '        var module = {};',
        '    </script>',
        '    <script src="/test/nodeunit.js"></script>',
        '    <script src="/output/js/ilib-ut.js"></script>',
        '    <script>',
        '        module = {',
        '            exports: {}',
        '        };',
        '    </script>'
    ];

    tests.forEach(function(test) {
        lines.push('    <script src="' + test + '"></script>');
    });

    lines = lines.concat([
        '  </head>',
        '  <body>',
        '    <h1 id="nodeunit-header">' + dir + ' Test Suite</h1>',
        '    <script>',
        '     nodeunit.run(module.exports);',
        '    </script>',
        '  </body>',
        '</html>'
    ]);

    var outFile = path.join(dir, "nodeunit", "testSuite.html");
    fs.writeFileSync(outFile, lines.join('\n'), "utf-8");
}

var suites = fs.readdirSync(".");
var pathName, relPath, included, stat;

suites.forEach(function (dir) {
    var outFileName;
    stat = fs.statSync(dir);
    if (stat && stat.isDirectory()) {
        var testDir = path.join(dir, "test");
        if (fs.existsSync(testDir)) {
            var suite = [];
            var tests = fs.readdirSync(testDir);
            tests.forEach(function(test) {
                if (test.substr(-3) === ".js" && (test.substring(0, 4) === "test" || testDir === "phone/test") && test.indexOf("uite") === -1) {
                    outFileName = (test.substring(0, 4) !== "test") ? "test" + test :  test;
                    suite.push(outFileName);
                    var full = path.join(testDir, test);
                    stat = fs.statSync(full);
                    if (stat && stat.isFile()) {
                        convertFile(dir, test, outFileName);
                    }
                }
            });

            generateSuiteJS(dir, suite);
            generateSuiteHTML(dir, suite);
        }
    }
});
