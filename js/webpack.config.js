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
    env = env || {};
    var size = env.size || "standard",
        assembly = env.assembly || "assembled",
        compilationType = env.compilation || "uncompiled",
        target = env.target || "web",
        locales = env.locales,
        ilibRoot = path.resolve(env.ilibRoot || "."),
        outputPath;

    // "ut" is unit tests
    if (size !== "core" && size !== "standard" && size !== "full" && size !== "ut" && size !== "demo") {
        size = "standard";
    }

    if (assembly !== "dynamic" && assembly !== "dynamicdata" && assembly !== "assembled") {
        assembly = "assembled";
    }

    if (compilationType !== "compiled" && compilationType !== "uncompiled") {
        compilationType = "uncompiled";
    }
    
    if (target !== "web" && target !== "node") {
        // TODO add other targets here as necessary
        target = "web";
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

    var dirName = [size, assembly, compilationType, target].join("-");
    var urlPath = path.join('output/js', dirName);
    outputPath = (assembly === "assembled") ?
        path.resolve(__dirname, urlPath) :
        path.resolve(__dirname, urlPath);

    var ret = {
        entry: './lib/metafiles/ilib-' + size + '-webpack.js',
        output: {
            filename: 'ilib-standard.js',
            chunkFilename: 'ilib.[name].js',
            path: outputPath,
            publicPath: "/" + urlPath + "/",
            library: 'ilib',
            libraryTarget: 'umd'
        },
        module: {
            rules: [{
                test: /\.js$/, // Run the loader on all .js files
                exclude: /node_modules/, // ignore all files in the node_modules folder
                use: {
                    loader: path.resolve('./ilibdata-webpack-loader.js'),
                    options: {
                        locales: locales,
                        assembly: assembly,
                        compilation: compilationType,
                        size: size,
                        ilibRoot: ilibRoot,
                        target: target
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

    if (target !== "web") {
        ret.target = target;
    }
    
    ret.output.filename = "ilib-" + size;
    if (assembly === "dynamicdata") {
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
