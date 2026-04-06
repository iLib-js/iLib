import path from 'path';
import { readFileSync, existsSync } from 'node:fs';
import {JSUtils, Utils} from 'ilib-common';

const reDependentPattern = /require\(\s*["']\.*\/([^"']+\.js)["']\);/g;
const reDataPattern = /\/\/\s*!data\s+([^\n\r]+)/g;

export function assemble(ilibFiles, options) {
    const locales = options.opt?.locales || [];
    const localeDataPath = path.join(process.cwd(), "js/data/locale");
    let customLocalePath;
    if (options.opt?.customLocalePath && existsSync(options.opt.customLocalePath)) {
        customLocalePath = options.opt.customLocalePath;
    }
    debugger;
    const dataList = readJSFiles(ilibFiles);
    const allData = readJSONData(dataList, locales, localeDataPath);
    return customLocalePath
        ? JSUtils.merge(allData, readJSONData(dataList, locales, customLocalePath), true)
        : allData;
}

function readFile(filepath) {
    if (!filepath) return "";
    try {
        return readFileSync(filepath, "utf-8");
    } catch {
        return "";
    }
}

function readJSFiles(ilibFiles) {
    const visitedJS = new Set(ilibFiles);
    const queue = [...ilibFiles];

    while (queue.length > 0) {
        const file = queue.shift();
        const readData = readFile(path.join(process.cwd(), "js/lib", file));
        if (readData) {
            for (const item of readData.matchAll(reDependentPattern)) {
                const dep = item[1];
                if (!visitedJS.has(dep)) {
                    visitedJS.add(dep);
                    queue.push(dep);
                }
            }
        }
    }
    return extractData([...visitedJS]);
}

function extractData(jsList) {
    const dependentData = new Set();

    jsList.forEach(file => {
        const readData = readFile(path.join(process.cwd(), "js/lib", file));
        if (readData) {
            for (const match of readData.matchAll(reDataPattern)) {
                match[1].trim().split(/\s+/).forEach(name => {
                    if (name) dependentData.add(name);
                });
            }
        }
    });

    return [...dependentData];
}

function readJSONData(jsonList, locales, dataPath) {
    const locData = {};

    locales.forEach(locale => {
        jsonList.forEach(name => {
            const locFiles = Utils.getLocFiles(locale, name + ".json");

            locFiles.forEach(file => {
                let loc = locale;
                const key = "ilib.data." + name;

                if (!locData[loc]) {
                    locData[loc] = {};
                }
                if (!locData[loc][key]) {
                    locData[loc][key] = {};
                }
                if (existsSync(path.join(dataPath, file))) {
                    const readData = readFile(path.join(dataPath, file));
                    if (readData) {
                        const parseData = JSON.parse(readData);
                        locData[loc][key] = JSUtils.merge(locData[loc][key], parseData, true);
                    }
                }
            });
        });
    });
    return locData;
}
