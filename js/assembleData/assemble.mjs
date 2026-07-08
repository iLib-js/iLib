/*
 * assemble.mjs - generating the final merged json files by using the ilib-assemble tool.
 *
 * Copyright © 2026, JEDLSoft
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

import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, existsSync } from 'node:fs';
import {JSUtils, Utils} from 'ilib-common';
import assembleZoneinfoData from './assembleZoneinfoData.mjs';

const reDependentPattern = /require\(\s*["']\.*\/([^"']+\.js)["']\);/g;
const reDataPattern = /\/\/\s*!data\s+([^\n\r]+)/g;
const moduleDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Resolves the ilib `lib` and locale data directories for a given root,
 * supporting both layouts this module can run from:
 *   - source tree:       <root>/js/lib   and <root>/js/data/locale
 *   - published package: <root>/lib      and <root>/locale
 *
 * @param {string} root - Directory to resolve the ilib data paths against
 * @returns {{libPath: string, localeDataPath: string}}
 */
function resolveDataPaths(root) {
    if (existsSync(path.join(root, 'js', 'lib'))) {
        return {
            libPath: path.join(root, 'js', 'lib'),
            localeDataPath: path.join(root, 'js', 'data', 'locale')
        };
    }
    return {
        libPath: path.join(root, 'lib'),
        localeDataPath: path.join(root, 'locale')
    };
}

// In the source tree this file lives at js/assembleData/, so the ilib root is
// two levels up. In the published package it sits at the package root next to
// the lib/ and locale/ directories.
// These can be overridden by options.opt?.ilibPath in assemble().
const defaultRoot = existsSync(path.join(moduleDir, 'lib'))
    ? moduleDir
    : path.resolve(moduleDir, '..', '..');
let { libPath, localeDataPath } = resolveDataPaths(defaultRoot);

/**
 * Assembles locale JSON data by analyzing ilib JS files and merging
 * data files for the given locales.
 *
 * When `splitByLocale` is **false** (default), all sublocale data files are
 * merged into a single object per locale. For example, for locale `"en-US"`,
 * the root, `"en"`, `"und/US"`, and `"en/US"` data files are deep-merged together and
 * returned under the `"en-US"` key:
 * ```
 * { "en-US": { "ilib.data.localematch": { ... merged ... } } }
 * ```
 * Output files: `en-US.json`, `de-DE.json`, ...
 *
 * When `splitByLocale` is **true**, each sublocale level is kept as a
 * separate entry so consumers can load only the layers they need. The keys
 * are directory-style sublocale paths (`"root"`, `"en"`, `"und/US"`, `"en/US"`, etc.):
 * ```
 * {
 *   "root":  { "ilib.data.localematch": { ... root data ... } },
 *   "en":    { "ilib.data.localematch": { ... en data ... } },
 *   "und/US": { "ilib.data.localematch": { ... und/US data ... } },
 *   "en/US": { "ilib.data.localematch": { ... en/US data ... } }
 * }
 * ```
 * Output files: `root.json`, `en.json`, `en-US.json`, ...
 *
 * @param {string[]} ilibFiles - List of ilib JS filenames to analyze
 * @param {object} options - ilib-assemble options object
 * @param {object} options.opt - CLI/config options
 * @param {string[]} [options.opt.locales] - Target locale list (BCP-47)
 * @param {boolean} [options.opt.splitByLocale] - When true, produce per-sublocale files (root, language, region) instead of one merged file per locale
 * @param {string} [options.opt.customLocalePath] - Custom locale data directory path
 * @returns {object} Merged JSON data map keyed by locale (or by sublocale path when splitByLocale is true)
 */
export function assemble(ilibFiles, options) {
    const locales = options.opt?.locales || [];
    const isSplit = options.opt?.splitByLocale || false;

    // Override paths if ilibPath is provided
    if (options.opt?.ilibPath) {
        ({ libPath, localeDataPath } = resolveDataPaths(options.opt.ilibPath));
    }

    // Validate paths
    if (!existsSync(libPath)) {
        throw new Error(`iLib JS library directory not found: ${libPath}`);
    }
    if (!existsSync(localeDataPath)) {
        throw new Error(`iLib locale data directory not found: ${localeDataPath}`);
    }

    const customLocaleDataPath = options.opt?.customLocalePath && existsSync(options.opt.customLocalePath)
        ? options.opt.customLocalePath
        : null;

    const dataNames = readJSFiles(ilibFiles);
    const regularNames = dataNames.filter(name => name !== "zoneinfo");

    const readFn = isSplit ? readJSONDataHierarchical : readJSONData;
    const result = readFn(regularNames, locales, localeDataPath);

    if (customLocaleDataPath) {
        const customResult = readFn(regularNames, locales, customLocaleDataPath);
        for (const key in customResult) {
            result[key] = JSUtils.merge(result[key] || {}, customResult[key], true);
        }
    }

    if (dataNames.includes("zoneinfo")) {
        const zoneinfoData = assembleZoneinfoData(path.join(localeDataPath, "zoneinfo"), readFile);
        if (isSplit) {
            if (!result["root"]) result["root"] = {};
            result["root"]["ilib.data.zoneinfo"] = zoneinfoData;
        } else {
            locales.forEach(locale => {
                if (!result[locale]) result[locale] = {};
                result[locale]["ilib.data.zoneinfo"] = zoneinfoData;
            });
        }
    }

    return result;
}

/**
 * Reads a file at the given path and returns its content as a UTF-8 string.
 * Returns an empty string if the file does not exist or cannot be read.
 *
 * @param {string} filepath - Absolute path to the file
 * @returns {string} File content or empty string
 */
function readFile(filepath) {
    if (!filepath) return "";
    try {
        return readFileSync(filepath, "utf-8");
    } catch {
        return "";
    }
}

/**
 * Traverses ilib JS files via BFS to collect all transitive dependencies,
 * then extracts the required data names from each file's `// !data` comments.
 *
 * @param {string[]} ilibFiles - Initial list of ilib JS filenames
 * @returns {string[]} Deduplicated list of data names found across all JS files
 */
function readJSFiles(ilibFiles) {
    const visitedJS = new Set(ilibFiles);
    const fileCache = new Map();
    const queue = [...ilibFiles];

    while (queue.length > 0) {
        const file = queue.shift();
        const fileContent = readFile(path.join(libPath, file));
        if (fileContent) {
            fileCache.set(file, fileContent);
            for (const match of fileContent.matchAll(reDependentPattern)) {
                const dep = match[1];
                if (!visitedJS.has(dep)) {
                    visitedJS.add(dep);
                    queue.push(dep);
                }
            }
        }
    }
    return extractData([...visitedJS], fileCache);
}

/**
 * Parses `// !data` comments from a list of JS files and returns
 * the collected data names as a deduplicated array.
 *
 * @param {string[]} jsFiles - List of JS filenames to parse
 * @param {Map<string, string>} fileCache - File content cache populated by readJSFiles
 * @returns {string[]} Deduplicated list of data names
 */
function extractData(jsFiles, fileCache) {
    const dataNames = new Set();

    jsFiles.forEach(file => {
        const fileContent = fileCache.get(file) || readFile(path.join(libPath, file));
        if (fileContent) {
            for (const match of fileContent.matchAll(reDataPattern)) {
                match[1].trim().split(/\s+/).forEach(name => {
                    if (name) dataNames.add(name);
                });
            }
        }
    });

    return [...dataNames];
}


/**
 * Reads JSON locale data files for each sublocale level independently (no merging).
 * Each file's content is stored under its directory-based sublocale key.
 *
 * @param {string[]} dataNames - List of data names to load
 * @param {string[]} locales - Target locale list (BCP-47)
 * @param {string} dataPath - Directory path where JSON data files are located
 * @returns {object} Data map keyed by sublocale path ("root", "en", "en/US", etc.)
 */
function readJSONDataHierarchical(dataNames, locales, dataPath) {
    const sublocaleData = {};
    const processedFiles = new Set();

    locales.forEach(locale => {
        dataNames.forEach(name => {
            const locFiles = Utils.getLocFiles(locale, name + ".json");
            locFiles.forEach(file => {
                const fullPath = path.join(dataPath, file);
                if (processedFiles.has(fullPath)) return;
                processedFiles.add(fullPath);

                if (!existsSync(fullPath)) return;
                const fileContent = readFile(fullPath);
                if (!fileContent) return;

                const dir = path.dirname(file);
                const sublocaleKey = dir === "." ? "root" : dir;
                const dataKey = "ilib.data." + name;

                if (!sublocaleData[sublocaleKey]) sublocaleData[sublocaleKey] = {};
                sublocaleData[sublocaleKey][dataKey] = JSUtils.merge(
                    sublocaleData[sublocaleKey][dataKey] || {},
                    JSON.parse(fileContent),
                    true
                );
            });
        });
    });

    return sublocaleData;
}

/**
 * Reads and merges JSON locale data files for each locale and data name.
 * Sublocale files are merged in order from least to most specific.
 *
 * @param {string[]} dataNames - List of data names to load (e.g. `"localematch"`)
 * @param {string[]} locales - Target locale list (BCP-47)
 * @param {string} dataPath - Directory path where JSON data files are located
 * @returns {object} Merged data map keyed by locale
 */
function readJSONData(dataNames, locales, dataPath) {
    const locData = {};

    locales.forEach(locale => {
        dataNames.forEach(name => {
            const locFiles = Utils.getLocFiles(locale, name + ".json");

            locFiles.forEach(file => {
                const dataKey = "ilib.data." + name;

                if (!locData[locale]) {
                    locData[locale] = {};
                }
                if (!locData[locale][dataKey]) {
                    locData[locale][dataKey] = {};
                }
                if (existsSync(path.join(dataPath, file))) {
                    const fileContent = readFile(path.join(dataPath, file));
                    if (fileContent) {
                        const jsonData = JSON.parse(fileContent);
                        locData[locale][dataKey] = JSUtils.merge(locData[locale][dataKey], jsonData, true);
                    }
                }
            });
        });
    });
    return locData;
}
