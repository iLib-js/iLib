/*
 * switchmode.js - switch the ilib npm package to production or development mode
 *
 * Copyright © 2020 JEDLSoft
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

var fs = require("fs");

var args = process.argv;

if (args[2] === "-h" || args[2] === "--help") {
    console.log("Usage: switchmode.sh '(production|development)'");
    console.log("Switch ilib to the compressed/production mode or the uncompressed/development mode.");
    process.exit(0);
}

if (args[2] === "production") {
    if (!fs.existsSync("./src")) {
        fs.renameSync("lib", "src");
        fs.renameSync("mini", "lib");
    }
    console.log("ilib is now in production mode.");
} else {
    if (!fs.existsSync("./mini")) {
        fs.renameSync("lib", "mini");
        fs.renameSync("src", "lib");
    }
    console.log("ilib is now in development mode.");
}
