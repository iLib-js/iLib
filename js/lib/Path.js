/*
 * Path.js - minimal pure js implementation of the nodejs path module
 *
 * Copyright © 2015, JEDLSoft
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

var Path = {
    /**
     * Return the parent directory of the given pathname
     * similar to the dirname shell function.
     * @static
     * @param {string} pathname path to check
     * @return {string} the parent dir of the given pathname
     */
    dirname: function(pathname) {
        if (!pathname) return pathname;
        pathname = Path.normalize(pathname);
        return (pathname === ".") ? ".." : Path.normalize(pathname + "/..");
    },

    /**
     * Return the normalized version of the given pathname. This
     * cleans up things like double directory separators and such.
     * @static
     * @param {string} pathname path to check
     * @return {string} the normalized version of the given pathname
     */
    normalize: function(pathname) {
        if (pathname) {
            pathname = pathname.replace(/\\/g, "/");
            pathname = pathname.replace(/\/\//g, "/");
            pathname = pathname.replace(/\/\//g, "/");
            pathname = pathname.replace(/\/[^/]*[^\./]\/\.\./g, "/.");
            pathname = pathname.replace(/^[^/]*[^\./]\/\.\./g, ".");
            pathname = pathname.replace(/\/\.\//g, "/");
            pathname = pathname.replace(/^\.\//, "");
            pathname = pathname.replace(/\/\//g, "/");
            pathname = pathname.replace(/\/\.$/, "");
            pathname = pathname.replace(/\/\//g, "/");
            if (pathname.length > 1) pathname = pathname.replace(/\/$/, "");
            if (pathname.length === 0) pathname = '.';
        }
        return pathname;
    },

    /**
     * Return a path that is the concatenation of all the of the arguments
     * which each name a path segment.
     * @static
     * @param {...string} var_args
     * @return {string} the concatenated pathname
     */
    join: function(var_args) {
        var arr = [];
        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i] && arguments[i].length > 0 ? arguments[i] : ".");
        }
        return Path.normalize(arr.join("/"));
    },

    /**
     * Return the base file name of the path. If the extension is given,
     * with or without the leading dot, then the extension is removed from
     * the base name.
     * @param {string} pathname the path to take the base name of
     * @param {string|undefined} extension the optional extension to remove
     * @return {string} the base name of the file without the extension
     */
    basename: function(pathname, extension) {
        var base = pathname;
        var slash = pathname.lastIndexOf("/");
        if (slash !== -1) {
            base = pathname.substring(slash+1);
        }

        if (extension) {
            var ext = extension[0] === "." ? extension : "." + extension;
            var index = base.lastIndexOf(ext);
            if (index > -1) {
                base = base.substring(0, index);
            }
        }

        return base;
    }
};

module.exports = Path;
