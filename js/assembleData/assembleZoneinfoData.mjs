import path from 'path';
import { existsSync, readdirSync, statSync } from 'node:fs';

/**
 * Recursively walks the zoneinfo directory and loads all timezone JSON files.
 * Returns a flat map keyed by timezone ID (e.g. "America/New_York").
 *
 * @param {string} zoneinfoPath - Root directory containing zoneinfo JSON files
 * @param {Function} readFile - File reader function
 * @returns {object} Flat map of timezone ID to parsed timezone data
 */
function assembleZoneinfoData(zoneinfoPath, readFile) {
    const zoneinfoData = {};

    if (!existsSync(zoneinfoPath)) {
        console.log(`Zoneinfo directory not found: ${zoneinfoPath}`);
        return zoneinfoData;
    }

    const walk = (dirPath, basePath) => {
        let fileList;
        try {
            fileList = readdirSync(dirPath);
        } catch (err) {
            console.log(`Failed to read directory ${dirPath}: ${err.message}`);
            return;
        }

        if (!fileList || fileList.length === 0) {
            return;
        }

        fileList.forEach(file => {
            const filePath = path.join(dirPath, file);
            let stat;
            try {
                stat = statSync(filePath);
            } catch {
                return;
            }

            if (stat && stat.isDirectory()) {
                walk(filePath, basePath);
            } else if (file.endsWith('.json')) {
                try {
                    const rawData = readFile(filePath);
                    if (!rawData) {
                        return;
                    }
                    const timezoneID = path
                        .relative(basePath, filePath)
                        .replace(/\\/g, '/')
                        .replace(/\.json$/, '');

                    zoneinfoData[timezoneID] = JSON.parse(rawData);
                } catch (err) {
                    console.log(`Failed to load ${filePath}: ${err.message}`);
                }
            }
        });
    };

    walk(zoneinfoPath, zoneinfoPath);
    return zoneinfoData;
}

export default assembleZoneinfoData;