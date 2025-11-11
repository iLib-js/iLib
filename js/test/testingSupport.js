/*
 * testingSupport.js - random utilities to use only in the unit tests
 *
 * Copyright © 2025, JEDLSoft
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

var SearchUtils = require("../lib/SearchUtils");
var semver = require("semver");
var ilib = require("../lib/ilib.js");

// ICU Version, CLDR Version, Unicode Version
var icuCldrVersionMappings = [
    [ 78, 48.0, 16.0 ], // planned for 2026
    [ 77.1, 47.0, 16.0 ],
    [ 77, 47.0, 16.0 ],
    [ 76.1, 46.0, 16.0 ],
    [ 76, 46.0, 16.0 ],
    [ 75.1, 45.0, 15.1 ],
    [ 75, 45.0, 15.1 ],
    [ 74.2, 44.1, 15.1 ],
    [ 74, 44.1, 15.1 ],
    [ 73, 45.0, 15.0 ],
    [ 72, 42.0, 15.0 ],
    [ 71.1, 41.0, 14.0 ],
    [ 71, 41.0, 14.0 ],
    [ 70.1, 40.0, 14.0 ],
    [ 70, 40.0, 14.0 ],
    [ 69, 39.0, 14.0 ],
    [ 68, 38.0, 13.0 ],
    [ 67.1, 37.0, 13.0 ],
    [ 67, 37.0, 13.0 ],
    [ 66, 36.1, 13.0 ],
    [ 65, 35.1, 12.1 ],
    [ 64.2, 35.1, "" ],
    [ 64, 34.0, 12.0 ],
    [ 63.1, 34.0, 12.0 ],
    [ 63, 33.1, 11.1 ],
    [ 62, 32.0, 11.0 ],
    [ 61, 31.0, 10.0 ],
    [ 60, 30.0, 9.0 ],
    [ 59, 29.0, 9.0 ],
    [ 58, 28.0, 9.0 ]
];

// format is:
// Chrome Version (Approx.), ICU Version, Release Date (Approx.)
var chromeVersionMappings = [
    [ 142, 76, "Nov 2025" ],
    [ 138, 75, "Jul 2025" ],
    [ 128, 74, "Aug 2024" ],
    [ 114, 73, "Jun 2023" ],
    [ 101, 71, "Apr 2022" ],
    [ 94, 70, "Sep 2021" ],
    [ 87, 68, "Nov 2020" ],
    [ 80, 66, "Feb 2020" ],
    [ 70, 62, "Oct 2018" ],
    [ 58, 58, "Apr 2017" ],
    [ 40, 54.1, "Jan 2015" ],
    [ 33, 52, "Feb 2014" ],
    [ 25, 4.8, "Feb 2013" ],
    [ 10, 4.6, "Mar 2011" ]
];

var safariVersionMappings = [
    [ 18.0, 18.0, 18.0, "Nov 2025" ],
    [ 17.0, 17.0, 17.0, "Jul 2025" ],
    [ 16.0, 16.0, 16.0, "Aug 2024" ],
    [ 15.0, 15.0, 15.0, "Jun 2023" ],
    [ 14.0, 14.0, 14.0, "Apr 2022" ],
    [ 13.0, 13.0, 13.0, "Sep 2021" ],
];

// Node.js Version, ICU Version, CLDR Version, Release Date (Approx.)
var nodeVersionMappings = [
    [ "24.11.0", 78, 78, "Nov 2024" ],
    [ "24.0.0", 75, 75, "May 2025" ],
    [ "22.0.0", 74, 74, "Apr 2024" ],
    [ "20.19.5", 77.1, 77.1, "Nov 2024" ],
    [ "20.19.1", 76.1, 76.1, "Sep 2024" ],
    [ "20.15.0", 75.1, 75.1, "Nov 2023" ],
    [ "20.0.0", 73, 73, "Apr 2023" ],
    [ "18.20.8", 74.2, 74.2, "Oct 2024" ],
    [ "18.20.0", 74.2, 74.2, "Oct 2023" ],
    [ "18.10.0", 71.1, 71.1, "Oct 2022" ],
    [ "18.0.0", 71, 72, "Apr 2022" ],
    [ "16.14.0", 70.1, 70.1, "Feb 2022" ],
    [ "16.0.0", 69, 71, "Apr 2021" ],
    [ "14.20.0", 70.1, 70.1, "Mar 2022" ],
    [ "14.19.0", 70.1, 70.1, "Oct 2021" ],
    [ "14.0.0", 66, 70, "Apr 2020" ],
    [ "13.0.0", 65, 65, "Oct 2019" ],
    [ "12.20.0", 67.1, 67.1, "Nov 2020" ],
    [ "12.12.0", 64.2, 64.2, "Oct 2019" ],
    [ "12.0.0", 64, 64, "Apr 2019" ],
    [ "11.12.0", 63.1, 63.1, "Apr 2019" ],
    [ "10.19.0", 64.2, 64.2, "Mar 2020" ],
    [ "10.0.0", 62, 62, "Apr 2018" ],
    [ "8.0.0", 58, 58, "May 2017" ],
    [ "6.0.0", 56, 56, "Apr 2016" ],
];

// Opera Version (Approx.), ICU Version
var operaVersionMappings = [
    [ 117, 77 ],
    [ 115, 76 ],
    [ 114, 75 ],
    [ 112, 75 ],
    [ 110, 74 ],
    [ 108, 74 ],
    [ 107, 74 ],
    [ 95, 73 ],
    [ 79, 69.1 ],
    [ 77, 69.1 ],
    [ 75, 68.2 ],
    [ 73, 68.2 ],
    [ 65, 65.1 ],
    [ 63, 65.1 ],
    [ 60, 64.2 ],
    [ 15, 52.1 ]
];

// Edge Version (Approx.), ICU Version
var edgeVersionMappings = [
    [ 142, 76 ], // Current release uses latest ICU
    [ 136, 76 ], // ~76	15.1
    [ 128, 75 ], // ~75	15.1
    [ 115, 73 ], // ~73	15.0
    [ 102, 71 ], // ~71	14.0
    [ 91, 69.1 ], // ~69.1	14.0
    [ 79, 65.1 ], // ~65.1	13.0
    [ 77, 65.1 ], // ~65.1	13.0
];

// Firefox Version (Approx.), Bundled ICU Version,	Notes
var firefoxVersionMappings = [
    [ 142, 76 ], // Current release uses latest ICU
    [ 136, 75 ], // ~75	15.1
    [ 128, 74 ], // ~74	15.1
    [ 115, 73 ], // ~73	15.0
    [ 102, 71 ], // ~71	14.0
    [ 91, 69 ], // ~69	14.0
    [ 78, 66 ], // ~66	13.0
    [ 68, 64 ], // ~64	12.0
    [ 60, 60 ], // Switched to bundling ICU in-tree
    [ 50, 50.1 ], // Older versions often used system ICU
];

//  OS X / macOS Version, OS Version Number, Approximate Bundled ICU Version
var macOStoICUVersionMappings = [
    ["15.0.0", 76, "Tahoe" ],
    ["14.1.0", 75, "Sequoia" ],
    ["14.0.0", 74, "Sonoma" ],
    ["13.0.0", 72.1, "Ventura" ],
    ["12.0.0", 69.1, "Monterey" ],
    ["11.0.0", 68.2, "Big Sur" ],
    ["10.15.0", 64.2, "Catalina" ],
    ["10.14.0", 62.1, "Mojave" ],
    ["10.13.0", 59.1, "High Sierra" ],
    ["10.12.0", 58.2, "Sierra" ],
    ["10.11.0", 55.1, "El Capitan" ],
    ["10.10.0", 54.1, "Yosemite" ],
    ["10.9.0", 52, "Mavericks" ],
    ["10.8.0", 50, "Mountain Lion" ],
    ["10.7.0", 48, "Lion" ],
    ["10.6.0", 46, "Snow Leopard" ],
    ["10.5.0", 46, "Leopard" ],
];

// Unix/Linux Distribution, Version, ICU Version
// Format: ["Distribution Name", "Version", ICU Version]
var unixVersionMappings = [
    // Ubuntu versions
    ["Ubuntu", "24.04", 75 ],
    ["Ubuntu", "23.10", 74 ],
    ["Ubuntu", "23.04", 73 ],
    ["Ubuntu", "22.04", 72 ],
    ["Ubuntu", "21.10", 71 ],
    ["Ubuntu", "21.04", 70 ],
    ["Ubuntu", "20.04", 68 ],
    ["Ubuntu", "18.04", 63 ],
    ["Ubuntu", "16.04", 58 ],
    // RedHat/CentOS versions
    ["RedHat", "9", 68 ],
    ["RedHat", "8", 64 ],
    ["RedHat", "7", 50 ],
    ["CentOS", "9", 68 ],
    ["CentOS", "8", 64 ],
    ["CentOS", "7", 50 ],
    // Debian versions
    ["Debian", "12", 72 ],
    ["Debian", "11", 68 ],
    ["Debian", "10", 63 ],
    ["Debian", "9", 58 ],
    // Fedora versions
    ["Fedora", "40", 74 ],
    ["Fedora", "39", 73 ],
    ["Fedora", "38", 72 ],
    ["Fedora", "37", 71 ],
    ["Fedora", "36", 70 ],
    ["Fedora", "35", 69 ],
    ["Fedora", "34", 68 ],
    ["Fedora", "33", 67 ],
    ["Fedora", "32", 66 ],
];

// Windows Version, Windows NT Version, ICU Version
// Format: ["Windows Version", "NT Version", ICU Version]
var windowsVersionMappings = [
    ["11.0.0", "10.0", 72 ], // Windows 11 (uses NT 10.0, but can be detected via UA-CH)
    ["10.0.0", "10.0", 66 ], // Windows 10
    ["8.1.0", "6.3", 55 ],   // Windows 8.1
    ["8.0.0", "6.2", 52 ],   // Windows 8
    ["7.0.0", "6.1", 50 ],   // Windows 7
    ["Vista", "6.0", 50 ],   // Windows Vista
    ["XP", "5.1", 36 ],      // Windows XP
];

function getOS() {
    // Detect OS type
    if (typeof(process) !== 'undefined' && process.platform) {
        var platform = process.platform;
        if (platform === 'darwin') {
            return "Macintosh";
        } else if (platform === 'win32') {
            return "Windows";
        } else if (platform === 'linux') {
            return "Linux";
        } else if (platform === 'freebsd' || platform === 'openbsd' || platform === 'netbsd') {
            return "BSD";
        } else if (platform === 'sunos' || platform === 'solaris') {
            return "Solaris";
        } else {
            return "Unix";
        }
    }
    // Browser environment - check user agent
    if (typeof(navigator) !== 'undefined' && navigator.userAgent) {
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("Macintosh") !== -1 || userAgent.indexOf("Mac OS X") !== -1) {
            return "Macintosh";
        } else if (userAgent.indexOf("Windows") !== -1) {
            return "Windows";
        } else if (userAgent.indexOf("Linux") !== -1) {
            return "Linux";
        } else if (userAgent.indexOf("X11") !== -1) {
            return "Unix";
        }
    }
    return "Unknown";
}

function getUnixVersion() {
    // Try to get Unix/Linux distribution and version from user agent or environment
    // This works in both Node.js and browser environments

    var userAgent = undefined;
    if (typeof(navigator) !== 'undefined' && navigator.userAgent) {
        userAgent = navigator.userAgent;
    }

    // Try to parse from user agent string (browser environment)
    if (userAgent) {
        // Look for Ubuntu version pattern: "Ubuntu/20.04" or "X11; Ubuntu; Linux x86_64"
        var ubuntuMatch = userAgent.match(/Ubuntu\/(\d+\.\d+)/);
        if (ubuntuMatch) {
            return {
                distribution: 'Ubuntu',
                version: ubuntuMatch[1]
            };
        }

        // Look for Fedora version pattern: "Fedora/38"
        var fedoraMatch = userAgent.match(/Fedora\/(\d+)/);
        if (fedoraMatch) {
            return {
                distribution: 'Fedora',
                version: fedoraMatch[1]
            };
        }

        // Look for Debian version pattern: "Debian/12"
        var debianMatch = userAgent.match(/Debian\/(\d+)/);
        if (debianMatch) {
            return {
                distribution: 'Debian',
                version: debianMatch[1]
            };
        }

        // Look for generic Linux - we can't determine distribution/version from user agent alone
        // but we can at least indicate it's Linux
        if (userAgent.indexOf('Linux') !== -1 && userAgent.indexOf('X11') !== -1) {
            // Can't determine specific distribution/version from generic Linux user agent
            // Return undefined to fall back to other methods
        }
    }

    // In Node.js environment, try environment variables
    if (typeof(process) !== 'undefined' && process.platform && process.platform !== 'win32' && process.platform !== 'darwin') {
        // Try to use environment variables that might contain distribution info
        // Some CI systems and containers set these
        if (process.env && process.env.OS_RELEASE) {
            try {
                var osRelease = process.env.OS_RELEASE;
                var distro = undefined;
                var version = undefined;

                var lines = osRelease.split('\n');
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i].trim();
                    if (line.indexOf('ID=') === 0) {
                        distro = line.substring(3).replace(/^"|"$/g, '').trim();
                        // Normalize distribution names
                        if (distro === 'ubuntu') distro = 'Ubuntu';
                        else if (distro === 'rhel' || distro === 'redhat') distro = 'RedHat';
                        else if (distro === 'centos') distro = 'CentOS';
                        else if (distro === 'debian') distro = 'Debian';
                        else if (distro === 'fedora') distro = 'Fedora';
                        else distro = distro.charAt(0).toUpperCase() + distro.slice(1);
                    } else if (line.indexOf('VERSION_ID=') === 0) {
                        version = line.substring(11).replace(/^"|"$/g, '').trim();
                    }
                }

                if (distro && version) {
                    return {
                        distribution: distro,
                        version: version
                    };
                }
            } catch (e) {
                // Ignore errors
            }
        }

        // Check for distribution-specific environment variables
        if (process.env && process.env.DISTRIB_ID) {
            var distro = process.env.DISTRIB_ID;
            var version = process.env.DISTRIB_RELEASE;

            if (distro && version) {
                // Normalize distribution names
                if (distro.toLowerCase() === 'ubuntu') distro = 'Ubuntu';
                else if (distro.toLowerCase() === 'rhel' || distro.toLowerCase() === 'redhat') distro = 'RedHat';
                else if (distro.toLowerCase() === 'centos') distro = 'CentOS';
                else if (distro.toLowerCase() === 'debian') distro = 'Debian';
                else if (distro.toLowerCase() === 'fedora') distro = 'Fedora';
                else distro = distro.charAt(0).toUpperCase() + distro.slice(1);

                return {
                    distribution: distro,
                    version: version
                };
            }
        }
    }

    // Can't determine Unix/Linux version
    return undefined;
}

function getWindowsVersion() {
    // Try to get Windows version from user agent string
    var userAgent = undefined;
    if (typeof(navigator) !== 'undefined' && navigator.userAgent) {
        userAgent = navigator.userAgent;
    }

    if (!userAgent) {
        return undefined;
    }

    // Look for Windows NT version pattern: "Windows NT 10.0" or "Windows NT 6.1"
    var ntMatch = userAgent.match(/Windows NT (\d+\.\d+)/);
    if (ntMatch) {
        var ntVersion = ntMatch[1];
        // Map NT version to Windows version
        // Windows 11 uses NT 10.0 but can be detected via UA-CH (we'll use NT 10.0 as fallback)
        // Windows 10 uses NT 10.0
        // Windows 8.1 uses NT 6.3
        // Windows 8 uses NT 6.2
        // Windows 7 uses NT 6.1
        // Windows Vista uses NT 6.0
        // Windows XP uses NT 5.1

        // Try to detect Windows 11 via User-Agent Client Hints if available
        var isWindows11 = false;
        if (typeof(navigator) !== 'undefined' && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
            // UA-CH is available, but we can't use async calls here
            // For now, we'll use NT version as fallback
        }

        // Find matching Windows version
        for (var i = 0; i < windowsVersionMappings.length; i++) {
            if (windowsVersionMappings[i][1] === ntVersion) {
                return {
                    version: windowsVersionMappings[i][0],
                    ntVersion: ntVersion
                };
            }
        }

        // If no exact match, return NT version as fallback
        return {
            version: undefined,
            ntVersion: ntVersion
        };
    }

    return undefined;
}

function getICUVersionForUnixVersion(unixVersion) {
    if (!unixVersion || !unixVersion.distribution || !unixVersion.version) {
        return undefined;
    }

    // Filter mappings for the specific distribution
    var distroMappings = [];
    for (var i = 0; i < unixVersionMappings.length; i++) {
        if (unixVersionMappings[i][0] === unixVersion.distribution) {
            distroMappings.push(unixVersionMappings[i]);
        }
    }

    if (distroMappings.length === 0) {
        return undefined;
    }

    // Find exact match first
    for (var j = 0; j < distroMappings.length; j++) {
        if (distroMappings[j][1] === unixVersion.version) {
            return distroMappings[j][2];
        }
    }

    // If no exact match, find closest version using semver comparison
    // Sort by version (descending) and find the first version <= target
    var sortedMappings = distroMappings.slice().sort(function(a, b) {
        return semver.compare(b[1], a[1]); // descending order
    });

    for (var k = 0; k < sortedMappings.length; k++) {
        if (semver.lte(sortedMappings[k][1], unixVersion.version)) {
            return sortedMappings[k][2];
        }
    }

    // If target version is less than all entries, use the last (oldest) entry
    if (sortedMappings.length > 0) {
        return sortedMappings[sortedMappings.length - 1][2];
    }

    return undefined;
}

function getCLDRVersionForUnixVersion() {
    var unixVersion = getUnixVersion();
    if (!unixVersion) {
        return undefined;
    }

    var icuVersion = getICUVersionForUnixVersion(unixVersion);
    if (icuVersion === undefined) {
        return undefined;
    }

    return getCLDRVersionForICUVersion(icuVersion);
}

function getChromeVersion() {
    const userAgent = navigator.userAgent;
    const raw = userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
}

function getFirefoxVersion() {
    const userAgent = navigator.userAgent;
    const raw = userAgent.match(/Firefox\/([0-9]+)\./);
    return raw ? parseInt(raw[1], 10) : false;
}

function getOperaVersion() {
    const userAgent = navigator.userAgent;
    const raw = userAgent.match(/OPR\/([0-9]+)\./);
    return raw ? parseInt(raw[1], 10) : false;
}

function getEdgeVersion() {
    const userAgent = navigator.userAgent;
    const raw = userAgent.match(/Edg(e|A)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
}

function getSafariVersion() {
    const userAgent = navigator.userAgent;
    const raw = userAgent.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+).*Safari/);
    return raw ? parseFloat(raw[1] + "." + raw[2]) : false;
}

function getMacOSVersion() {
    const userAgent = navigator.userAgent;
    let osVersion = "Unknown";

    // Check if the OS is Mac
    if (userAgent.indexOf("Macintosh") != -1) {
        // Look for the version number pattern "Mac OS X 10_X_X" or "Mac OS X 11_X_X" or MacOS 10.X.X, etc.
        const regex = /Mac OS X 10[_.](\d+)[_.](\d+)/;
        const match = userAgent.match(regex);

        if (match) {
            // For versions up to 10.15
            if (parseInt(match[1]) === 10) {
                osVersion = {
                    major: match[2],
                    minor: match[3],
                    patch: "0"
                };
            } else {
                // For macOS 11 (Big Sur), 12 (Monterey), etc.
                osVersion = {
                    major: match[1],
                    minor: match[2],
                    patch: "0"
                };
            }
        }

        // Modern user agents might just show the major version in some cases
        if (osVersion === "Unknown" && userAgent.indexOf("Mac OS X 1") != -1) {
            // Fallback for newer versions that might be simplified in the UA string
            // This is highly unreliable and only a guess
            const simpleRegex = /Mac OS X 10[_.](\d+)/;
            const simpleMatch = userAgent.match(simpleRegex);
            if (simpleMatch) {
                osVersion = {
                    major: simpleMatch[1],
                    minor: "0",
                    patch: "0"
                };
            }
        }
    }

    return osVersion;
}

function findNumericVersion(version, versionMappings) {
    var index = SearchUtils.bsearch(version, versionMappings, function(a, b) {
        // a is the array element [version, ...], b is the target version number
        // For descending arrays, reverse the comparison
        return b - a[0];
    });
    return index;
}

function findStringVersion(version, versionMappings) {
    var index = SearchUtils.bsearch(version, versionMappings, function(a, b) {
        // a is the array element ["version", ...], b is the target version string
        // For descending arrays, reverse the comparison
        return semver.compare(b, a[0]);
    });
    return index;
}

function getCLDRVersionForICUVersion(icuVersion) {
    var index = findNumericVersion(icuVersion, icuCldrVersionMappings);
    if (index < 0) {
        // if negative, use the first (latest) entry
        index = 0;
    } else if (index >= icuCldrVersionMappings.length) {
        // if beyond array (version is less than all entries), use the first (latest) entry
        index = 0;
    }
    // entry 1 is the CLDR version
    return icuCldrVersionMappings[index][1];
}

function getICUVersionForMacOSVersion(macOSVersion) {
    var index = findStringVersion(macOSVersion, macOStoICUVersionMappings);
    if (index < 0 || index >= macOStoICUVersionMappings.length) {
        // assume the latest version
        index = macOStoICUVersionMappings.length - 1;
    }
    // entry 2 is the ICU version
    return macOStoICUVersionMappings[index][1];
}

function getICUVersionForChromeVersion(chromeVersion) {
    var index = findNumericVersion(chromeVersion, chromeVersionMappings);
    if (index < 0 || index >= chromeVersionMappings.length) {
        // if out of bounds, use the last (oldest) entry
        index = chromeVersionMappings.length - 1;
    }
    // entry 1 is the ICU version
    return chromeVersionMappings[index][1];
}

function getICUVersionForFirefoxVersion(firefoxVersion) {
    var index = findNumericVersion(firefoxVersion, firefoxVersionMappings);
    if (index < 0 || index >= firefoxVersionMappings.length) {
        // if out of bounds, use the last (oldest) entry
        index = firefoxVersionMappings.length - 1;
    }
    // entry 1 is the ICU version
    return firefoxVersionMappings[index][1];
}

function getICUVersionForOperaVersion(operaVersion) {
    var index = findNumericVersion(operaVersion, operaVersionMappings);
    if (index < 0 || index >= operaVersionMappings.length) {
        // if out of bounds, use the first (latest) entry
        index = 0;
    }
    // entry 1 is the ICU version
    return operaVersionMappings[index][1];
}

function getICUVersionForEdgeVersion(edgeVersion) {
    var index = findNumericVersion(edgeVersion, edgeVersionMappings);
    if (index < 0 || index >= edgeVersionMappings.length) {
        // if out of bounds, use the first (latest) entry
        index = 0;
    }
    // entry 1 is the ICU version
    return edgeVersionMappings[index][1];
}

function getICUVersionForWindowsVersion(windowsVersion) {
    if (!windowsVersion || !windowsVersion.version) {
        return undefined;
    }

    // Find matching Windows version in mappings
    for (var i = 0; i < windowsVersionMappings.length; i++) {
        if (windowsVersionMappings[i][0] === windowsVersion.version) {
            return windowsVersionMappings[i][2]; // ICU version is at index 2
        }
    }

    // If no exact match, try to match by NT version
    if (windowsVersion.ntVersion) {
        for (var j = 0; j < windowsVersionMappings.length; j++) {
            if (windowsVersionMappings[j][1] === windowsVersion.ntVersion) {
                return windowsVersionMappings[j][2];
            }
        }
    }

    return undefined;
}

function getCLDRVersionForMacOSVersion() {
    var osVersion = getMacOSVersion();
    if (!osVersion || !osVersion.major || !osVersion.minor || !osVersion.patch) {
        // if we can't determine the macOS version, return undefined
        return undefined;
    }
    var macOSVersion = osVersion.major + "." + osVersion.minor + "." + osVersion.patch;
    var ICUVersion = getICUVersionForMacOSVersion(macOSVersion);
    return getCLDRVersionForICUVersion(ICUVersion);
}

function getCLDRVersionForWindowsVersion() {
    var windowsVersion = getWindowsVersion();
    if (!windowsVersion) {
        return undefined;
    }
    var ICUVersion = getICUVersionForWindowsVersion(windowsVersion);
    if (ICUVersion === undefined) {
        return undefined;
    }
    return getCLDRVersionForICUVersion(ICUVersion);
}

function getCLDRVersionForChromeVersion(chromeVersion) {
    var ICUVersion = getICUVersionForChromeVersion(chromeVersion);
    return getCLDRVersionForICUVersion(ICUVersion);
}

function getCLDRVersionForFirefoxVersion(firefoxVersion) {
    var ICUVersion = getICUVersionForFirefoxVersion(firefoxVersion);
    return getCLDRVersionForICUVersion(ICUVersion);
}

function getCLDRVersionForOperaVersion(operaVersion) {
    var ICUVersion = getICUVersionForOperaVersion(operaVersion);
    return getCLDRVersionForICUVersion(ICUVersion);
}

function getCLDRVersionForEdgeVersion(edgeVersion) {
    var ICUVersion = getICUVersionForEdgeVersion(edgeVersion);
    return getCLDRVersionForICUVersion(ICUVersion);
}

// Safari uses whatever version of ICU that the macOS version provides
function getCLDRVersionForSafariVersion() {
    return getCLDRVersionForMacOSVersion();
}

function getCLDRVersionForNodeVersion() {
    return process.versions["cldr"];
}

function getCLDRVersionForBrowser() {
    var browser = ilib._getBrowser();
    var cldrVersion = undefined;

    if (browser === "chrome") {
        var chromeVersion = getChromeVersion();
        if (chromeVersion) {
            cldrVersion = getCLDRVersionForChromeVersion(chromeVersion);
        }
    } else if (browser === "firefox") {
        var firefoxVersion = getFirefoxVersion();
        if (firefoxVersion) {
            cldrVersion = getCLDRVersionForFirefoxVersion(firefoxVersion);
        }
    } else if (browser === "opera") {
        var operaVersion = getOperaVersion();
        if (operaVersion) {
            cldrVersion = getCLDRVersionForOperaVersion(operaVersion);
        }
    } else if (browser === "edge") {
        var edgeVersion = getEdgeVersion();
        if (edgeVersion) {
            cldrVersion = getCLDRVersionForEdgeVersion(edgeVersion);
        }
    } else if (browser === "safari") {
        cldrVersion = getCLDRVersionForSafariVersion();
    }

    // Fallback to OS-specific CLDR version if browser version not available
    if (cldrVersion === undefined) {
        var osType = getOS();
        if (osType === "Macintosh") {
            cldrVersion = getCLDRVersionForMacOSVersion();
        } else if (osType === "Linux" || osType === "Unix" || osType === "BSD" || osType === "Solaris") {
            cldrVersion = getCLDRVersionForUnixVersion();
        } else if (osType === "Windows") {
            cldrVersion = getCLDRVersionForWindowsVersion();
        }
        // Other OSes don't have specific mappings yet
    }

    return cldrVersion;
}

module.exports = {
    getMacOSVersion: getMacOSVersion,
    getChromeVersion: getChromeVersion,
    getFirefoxVersion: getFirefoxVersion,
    getOperaVersion: getOperaVersion,
    getEdgeVersion: getEdgeVersion,
    getSafariVersion: getSafariVersion,
    getOS: getOS,
    getUnixVersion: getUnixVersion,
    getWindowsVersion: getWindowsVersion,
    findNumericVersion: findNumericVersion,
    findStringVersion: findStringVersion,
    getICUVersionForMacOSVersion: getICUVersionForMacOSVersion,
    getICUVersionForChromeVersion: getICUVersionForChromeVersion,
    getICUVersionForFirefoxVersion: getICUVersionForFirefoxVersion,
    getICUVersionForOperaVersion: getICUVersionForOperaVersion,
    getICUVersionForEdgeVersion: getICUVersionForEdgeVersion,
    getICUVersionForUnixVersion: getICUVersionForUnixVersion,
    getICUVersionForWindowsVersion: getICUVersionForWindowsVersion,
    getCLDRVersionForICUVersion: getCLDRVersionForICUVersion,
    getCLDRVersionForMacOSVersion: getCLDRVersionForMacOSVersion,
    getCLDRVersionForChromeVersion: getCLDRVersionForChromeVersion,
    getCLDRVersionForFirefoxVersion: getCLDRVersionForFirefoxVersion,
    getCLDRVersionForOperaVersion: getCLDRVersionForOperaVersion,
    getCLDRVersionForEdgeVersion: getCLDRVersionForEdgeVersion,
    getCLDRVersionForSafariVersion: getCLDRVersionForSafariVersion,
    getCLDRVersionForUnixVersion: getCLDRVersionForUnixVersion,
    getCLDRVersionForWindowsVersion: getCLDRVersionForWindowsVersion,
    getCLDRVersionForNodeVersion: getCLDRVersionForNodeVersion,
    getCLDRVersionForBrowser: getCLDRVersionForBrowser,
};