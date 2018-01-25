/*
 * webpack.config.js - webpack configuration script for ilib
 *
 * Copyright © 2018, JEDLSoft
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
var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env, args) {
    var size = args.env.size || "standard",
        assembly = args.env.assembly || "assembled",
        compilation = args.env.compilation || "uncompiled",
        locales = args.env.locales;

    // "ut" is unit tests
    if (size !== "core" && size !== "standard" && size !== "full" && size !== "ut" && size !== "demo") {
        size = "standard";
    }

    if (assembly !== "dynamic" && assembly !== "assembled") {
        assembly = "assembled";
    }

    if (compilation !== "compiled" && compilation !== "uncompiled") {
        compilation = "uncompiled";
    }

    if (locales) {
        locales = locales.split(",");
    } else {
        // default locales: the top 20 locales by traffic on the Internet
        locales = [
            "en-AU", "en-CA", "en-GB", "en-IN", "en-NG", "en-PH",
            "en-PK", "en-US", "en-ZA", "de-DE", "fr-CA", "fr-FR",
            "es-AR", "es-ES", "es-MX", "id-ID", "it-IT", "ja-JP",
            "ko-KR", "pt-BR", "ru-RU", "tr-TR", "vi-VN", "zxx-XX",
            "zh-Hans-CN", "zh-Hant-HK", "zh-Hant-TW", "zh-Hans-SG"
        ];
    }

    var ret = {
        entry: './lib/ilib-' + size + '-webpack.js',
        output: {
            filename: 'ilib-standard.js',
            path: path.resolve(__dirname, 'output/js'),
            library: 'ilib',
            libraryTarget: 'umd'
        },
        module: {
        },
        plugins: [
            new webpack.DefinePlugin({
                __VERSION__: JSON.stringify(require("./package.json").version)
            })
        ]
    };

    ret.output.filename = "ilib-" + size;
    if (assembly === "dynamic") {
        ret.output.filename += "-dyn";
    }
    if (compilation === "compiled") {
        ret.output.filename += "-compiled";
    }
    ret.output.filename += ".js";

    if (assembly !== "dynamic") {
        // not dynamic -- then include all the locale data
        ret.module.rules = [{
            test: /\.js$/, // Run the loader on all .js files
            exclude: /(node_modules|webpack)/, // ignore all files in the node_modules or webpack folders
            use: {
                loader: path.resolve('./lib/ilibdata-webpack-loader.js'),
                options: {
                    locales: locales
                }
            }
        }];
    }

    if (compilation === "compiled") {
        ret.plugins.push(new UglifyJsPlugin({
            cache: true,
            parallel: 4,
            uglifyOptions: {
                compress: true,
                warnings: true
            }
        }));
    }

    //console.log("config is " + JSON.stringify(ret, undefined, 4));
    return ret;
};
