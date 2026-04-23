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
import { readFileSync, existsSync } from 'node:fs';
import {JSUtils, Utils} from 'ilib-common';
import assembleZoneinfoData from './assembleZoneinfoData.mjs';

const reDependentPattern = /require\(\s*["']\.*\/([^"']+\.js)["']\);/g;
const reDataPattern = /\/\/\s*!data\s+([^\n\r]+)/g;

/**
 * Assembles locale JSON data by analyzing ilib JS files and merging
 * data files for the given locales.
 *
 * @param {string[]} ilibFiles - List of ilib JS filenames to analyze
 * @param {object} options - ilib-assemble options object
 * @param {object} options.opt - CLI/config options
 * @param {string[]} [options.opt.locales] - Target locale list (BCP-47)
 * @param {string} [options.opt.customLocalePath] - Custom locale data directory path
 * @returns {object} Merged JSON data map keyed by locale
 */
export function assemble(ilibFiles, options) {
    const locales = options.opt?.locales || [];
    const localeDataPath = path.join(process.cwd(), "js/data/locale");
    const customLocaleDataPath = options.opt?.customLocalePath && existsSync(options.opt.customLocalePath)
        ? options.opt.customLocalePath
        : null;
    
    const dataNames = readJSFiles(ilibFiles);
    const regularNames = dataNames.filter(name => name !== "zoneinfo");

    const localeData = readJSONData(regularNames, locales, localeDataPath);
    let result = customLocaleDataPath
        ? JSUtils.merge(localeData, readJSONData(regularNames, locales, customLocaleDataPath), true)
        : localeData;

    if (dataNames.includes("zoneinfo")) {
        const zoneinfoData = assembleZoneinfoData(path.join(localeDataPath, "zoneinfo"), readFile);
        locales.forEach(locale => {
            if (!result[locale]) {
                result[locale] = {};
            }
            result[locale]["ilib.data.zoneinfo"] = zoneinfoData;
        });
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
        const fileContent = readFile(path.join(process.cwd(), "js/lib", file));
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
        const fileContent = fileCache.get(file) || readFile(path.join(process.cwd(), "js/lib", file));
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
 * Assembles locale JSON data in a hierarchical structure: instead of one merged
 * file per full locale, each sublocale level (root, language, und/region,
 * language/region) is written as its own file containing only that level's delta.
 *
 * @param {string[]} ilibFiles - List of ilib JS filenames to analyze
 * @param {object} options - ilib-assemble options object
 * @param {object} options.opt - CLI/config options
 * @param {string[]} [options.opt.locales] - Target locale list (BCP-47)
 * @param {string} [options.opt.customLocalePath] - Custom locale data directory path
 * @returns {object} Data map keyed by sublocale path (e.g. "root", "en", "en/US")
 */
export function assembleHierarchical(ilibFiles, options) {
    const locales = options.opt?.locales || [];
    const localeDataPath = path.join(process.cwd(), "js/data/locale");
    const customLocaleDataPath = options.opt?.customLocalePath && existsSync(options.opt.customLocalePath)
        ? options.opt.customLocalePath
        : null;

    const dataNames = readJSFiles(ilibFiles);
    const regularNames = dataNames.filter(name => name !== "zoneinfo");

    const result = readJSONDataHierarchical(regularNames, locales, localeDataPath);
    if (customLocaleDataPath) {
        const customResult = readJSONDataHierarchical(regularNames, locales, customLocaleDataPath);
        for (const key in customResult) {
            result[key] = JSUtils.merge(result[key] || {}, customResult[key], true);
        }
    }

    if (dataNames.includes("zoneinfo")) {
        const zoneinfoData = assembleZoneinfoData(path.join(localeDataPath, "zoneinfo"), readFile);
        if (!result["root"]) result["root"] = {};
        result["root"]["ilib.data.zoneinfo"] = zoneinfoData;
    }

    return result;
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

                const dir = path.dirname(file);
                const sublocaleKey = dir === "." ? "root" : dir;
                const dataKey = "ilib.data." + name;

                if (!sublocaleData[sublocaleKey]) sublocaleData[sublocaleKey] = {};
                if (!sublocaleData[sublocaleKey][dataKey]) sublocaleData[sublocaleKey][dataKey] = {};

                if (existsSync(fullPath)) {
                    const fileContent = readFile(fullPath);
                    if (fileContent) {
                        sublocaleData[sublocaleKey][dataKey] = JSUtils.merge(
                            sublocaleData[sublocaleKey][dataKey],
                            JSON.parse(fileContent),
                            true
                        );
                    }
                }
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
