/*
 * qmlizer.js - fix the output of uglify so that it works properly in
 * Qt/qml.
 *
 * Copyright © 2018, LGE, Inc.
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

function qmlize(text) {
    // replace reserved keyword as with "as"
    text = text.replace(/([\,\{]\s*)(as)(\s*:)/gm, '$1"$2"$3')
    text = text.replace(/(new\s+[^\(\)\{\}\s;,]+)(\s*[;,])/gm, '$1()$2')
    text = text.replace(/(new\s+[^\(\)\{\}\s;,]+)(\s*\})/gm, '$1();$2')
    text = text.replace(/(\{\s*break)(\s*\})/gm, '$1;$2')
    return text;
}

(function () {
    console.log(process.argv);
    if (process.argv.length == 4) {
        var data = fs.readFileSync(process.argv[2], {encoding: 'utf8'});
        fs.writeFileSync(process.argv[3], qmlize(data), {encoding: 'utf8'});
    }
})();
