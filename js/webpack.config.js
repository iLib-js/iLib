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
// const IlibWebpackPlugin = require("./ilib-webpack-plugin.js");
// const IlibWebpackLoader = require("ilib-webpack-loader");

module.exports = function(env, args) {
    var size = args.env.size || "standard",
        assembly = args.env.assembly || "assembled",
        compilationType = args.env.compilation || "uncompiled",
        locales = args.env.locales,
        outputPath;

    // "ut" is unit tests
    if (size !== "core" && size !== "standard" && size !== "full" && size !== "ut" && size !== "demo") {
        size = "standard";
    }

    if (assembly !== "dynamic" && assembly !== "assembled") {
        assembly = "assembled";
    }

    if (compilationType !== "compiled" && compilationType !== "uncompiled") {
        compilationType = "uncompiled";
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

    var urlPath = ((assembly === "assembled") ?
        path.join('output/js', size, assembly) :
        path.join('output/js', size, assembly, compilationType)) + "/";
    outputPath = (assembly === "assembled") ?
        path.resolve(__dirname, urlPath) :
        path.resolve(__dirname, urlPath);

    var ret = {
        entry: './lib/ilib-' + size + '-webpack.js',
        output: {
            filename: 'ilib-standard.js',
            chunkFilename: 'ilib.[name].js',
            path: outputPath,
            publicPath: "/" + urlPath,
            library: 'ilib',
            libraryTarget: 'umd'
        },
        module: {
            rules: [{
                test: /\.js$/, // Run the loader on all .js files
                exclude: /(node_modules|webpack)/, // ignore all files in the node_modules or webpack folders
                use: {
                    loader: path.resolve('./lib/ilibdata-webpack-loader.js'),
                    options: {
                        locales: locales,
                        assembly: assembly,
                        compilation: compilationType,
                        size: size
                    }
                }
            }]
        },
        plugins: [
            new webpack.DefinePlugin({
                __VERSION__: JSON.stringify(require("./package.json").version)
            })
            /*
            ,
            new IlibWebpackPlugin({
                locales: locales,
                assembly: assembly,
                compilation: compilationType,
                size: size
            })
            */
        ]
    };

    ret.output.filename = "ilib-" + size;
    if (assembly === "dynamic") {
        ret.output.filename += "-dyn";
    }
    if (compilationType === "compiled") {
        ret.output.filename += "-compiled";
    }
    ret.output.filename += ".js";

    if (compilationType === "compiled") {
        ret.plugins.splice(0, 0, new UglifyJsPlugin({
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
